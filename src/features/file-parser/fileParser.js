import { parseExcel } from './excelParser.js';
import { parseCsv } from './csvParser.js';
import { parseXml } from './xmlParser.js';

export async function fileParser(file) {
    const extension = file.name
        .split('.')
        .pop()
        .toLowerCase();

    switch (extension) {
        case 'xlsx':
        case 'xls':
            return parseExcel(file);

        case 'csv':
            return parseCsv(file);

        case 'xml':
            return parseXml(file);

        default:
            throw new Error('Unsupported file type');
    }
}