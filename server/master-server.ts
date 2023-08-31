import {listenToHttpServer} from "./http/http-server";
import {listenToSerialPort} from "./serial-port/serial-port";


(async () => {await listenToSerialPort()})();
listenToHttpServer();
