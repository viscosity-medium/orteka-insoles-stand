import {SystemVariables} from "../types/system-variables.types";

export interface ServerStore {
    previousState: number[]
}

export const systemVariables: SystemVariables = {

    rootDir: process.cwd(),
    isDev: process.env.NODE_MODE === "Development",

    deviceSerialPort: process.env.DEVICE_SERIAL_PORT!,
    httpServerPort: +process.env.NEXT_PUBLIC_HTTP_SERVER_PORT!,
    httpClientPort: +process.env.NEXT_PUBLIC_HTTP_CLIENT_PORT!,

    httpClientHost: `http://${process.env.NODE_MODE === "Development" ? "localhost" : process.env.NEXT_PUBLIC_HTTP_HOST}:${process.env.NEXT_PUBLIC_HTTP_CLIENT_PORT}`,
    httpServerHost: `http://${process.env.NODE_MODE === "Development" ? "localhost" : process.env.NEXT_PUBLIC_HTTP_HOST}:${process.env.NEXT_PUBLIC_HTTP_SERVER_PORT}`,

}
