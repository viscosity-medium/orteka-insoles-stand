// common types



// xml-template.ts

export interface XmlProps {
    xmlContent: number;
}

export type XmlTemplate = ({xmlContent}: XmlProps) => string

// xml-utilities.ts

export interface XmlDefinerProps {
    arduinoData: number[];
}

export type DefineXmlContent = ({arduinoData}: XmlDefinerProps) => number;

export interface CreateXmlProps{
    arduinoData: number[];
    fileName: string
}

export type CreateXmlTemplate = ({arduinoData}:CreateXmlProps) => Promise<void>;