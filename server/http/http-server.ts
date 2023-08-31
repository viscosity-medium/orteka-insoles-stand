import express from "express";
import * as http from "http";
import {systemVariables} from "../system-variables/system-variables";
import {router} from "../router/http-router";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(express.static("static"));
app.use(bodyParser.json());
app.use(cors({
    origin: "*"
}))
app.use("/server-api", router);

const httpServer = http.createServer(app);
const port = systemVariables.httpServerPort || 5001;

export const listenToHttpServer = () => {
    httpServer.listen(port, async () => {

        console.log(`Http server is being listened on port ${port}`);
        // http://localhost:5001/files/addreality.xml #static xml

    });
};

