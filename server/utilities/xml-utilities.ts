import {CreateXmlTemplate, DefineXmlContent} from "../types/xml.types";
import {xmlTemplate} from "../static/templates/xml-template";
import {fileSystemUtilities} from "./file-system-utilities";


const defineXmlContent: DefineXmlContent = ({arduinoData}) => {

    const parsedArrayArray = arduinoData;
    return parsedArrayArray[parsedArrayArray.length - 2] as number;

};

export const createXmlTemplate:CreateXmlTemplate = async ({ arduinoData, fileName }) => {

    const xmlContent = defineXmlContent({
        arduinoData
    });

    console.log(`xml content: ${xmlContent !== undefined ? xmlContent : 0}`)

    await fileSystemUtilities.writeFile({
        data: xmlTemplate({xmlContent: xmlContent !== undefined ? xmlContent : 0}),
        relativePathArray: ["static", "files", fileName]
    });
};