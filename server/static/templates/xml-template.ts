import {XmlTemplate} from "../../types/xml.types";

export const xmlTemplate: XmlTemplate = ({xmlContent}) => (
`<?xml version="1.0"?>
<orteka>
    <content>${xmlContent}</content>
</orteka>`
);
