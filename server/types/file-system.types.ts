// file-system-utilities.ts
export interface CreateAbsolutePathProps {
    relativePathArray: string[]
}

export interface WriteFileProps {
    data: string
    relativePathArray: string[];
}