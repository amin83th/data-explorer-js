import { XMLParser } from 'fast-xml-parser';

export async function parseXml(file) {
    const text = await file.text();

    const parser = new XMLParser({
        ignoreAttributes: false
    });

    const parsedData = parser.parse(text);

    return findArray(parsedData);
}

function findArray(data) {
    if (Array.isArray(data)) {
        return data;
    }

    if (typeof data === "object" && data !== null) {
        for (const key in data) {
            const result = findArray(data[key]);

            if (result) {
                return result;
            }
        }
    }

    return null;
}