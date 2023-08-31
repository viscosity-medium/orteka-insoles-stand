import {ServerStore, systemVariables} from "../system-variables/system-variables";
import {createXmlTemplate} from "../utilities/xml-utilities";
import {compareArrays} from "../utilities/serial-port-utilites";
import {InsolesNameList} from "../types/types";
import {SerialPort} from "serialport";
import {DelimiterParser} from '@serialport/parser-delimiter'

export let serialPort: any | null = null;

export const listenToSerialPort = async () => {
    
    await new Promise((resolve) => {
        SerialPort.list().then((list)=>{
            list.forEach((portInfo: any)=>{
                
                if(portInfo.friendlyName.toLowerCase().match("usb-serial")){
                    serialPort = !systemVariables.isDev ? new SerialPort({
                        path: portInfo.path,
                        baudRate: 9600,
                    }) : null;
                    resolve("");
                }
            });
        });
    })

    let arduinoCollectedData: undefined | number[] = undefined;
    const serverStore: ServerStore = {
        previousState: []
    };
    const contentLength = Object.keys(InsolesNameList).length;
    const parser = serialPort.pipe(new DelimiterParser({ delimiter: '\n' }));

    serialPort?.on("open", () => {
        console.log("Serial port is being listened");
        
        try{
            parser?.on("data", async (buffer: Buffer) => {

                const arduinoNegativeCollectedData: number[] = [];
                const stringBuffer = buffer.toString().trim();
    
                if(!stringBuffer.match(/[A-Za-z]/)){
                    arduinoCollectedData = JSON.parse(stringBuffer);
                }
                
                if(arduinoCollectedData){
                     
                    for(let i = 1;i<=contentLength - 1;i++){
                        !arduinoCollectedData.includes(i) && arduinoNegativeCollectedData.push(i);
                    };
    
                    const correctSequenceData = compareArrays({
                        prevArray: serverStore.previousState,
                        newArray: arduinoNegativeCollectedData
                    });
    
                    console.log(`Previous array: [${serverStore.previousState}]`);
                    console.log(`Current array: [${arduinoNegativeCollectedData}]`);
                    console.log(`Correct sequence: [${correctSequenceData}]`);
    
                    await createXmlTemplate({
                        arduinoData: correctSequenceData,
                        fileName: "addreality.xml"
                    });
    
                    serverStore.previousState = correctSequenceData;
                    arduinoCollectedData = undefined;
                
                }
    
            });
        } catch(err){
            console.log("serialport error");
        }

    });


};