import * as fs from "fs";
import path from "path";
import {systemVariables} from "../system-variables/system-variables";
import {CreateAbsolutePathProps, WriteFileProps} from "../types/file-system.types";

class FileSystemUtilities {

    createAbsolutePath({ relativePathArray }: CreateAbsolutePathProps){

        const absolutePath = path.resolve(
            systemVariables.rootDir,
            ...relativePathArray
        )

        return(absolutePath);

    };

    async writeFile({data, relativePathArray}: WriteFileProps){

        const absolutePath = this.createAbsolutePath({relativePathArray});

        fs.writeFileSync( absolutePath, data );

    };

}

export const fileSystemUtilities = new FileSystemUtilities();