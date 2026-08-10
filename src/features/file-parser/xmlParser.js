import { XMLParser } from 'fast-xml-parser';

export async function parseXml(file) {
    const text = await file.text();

    const parser = new XMLParser({
        ignoreAttributes: false
    });

    return parser.parse(text);
}