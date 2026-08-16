import { describe, expect, it, vi } from 'vitest';
import { fileParser } from './fileParser.js';
import { parseExcel } from './excelParser.js';
import { parseCsv } from './csvParser.js';
import { parseXml } from './xmlParser.js';

vi.mock('./excelParser.js', () => ({
    parseExcel: vi.fn(),
}));

vi.mock('./csvParser.js', () => ({
    parseCsv: vi.fn(),
}));

vi.mock('./xmlParser.js', () => ({
    parseXml: vi.fn(),
}));

describe('fileParser', () => {

    it('should call parseExcel for xlsx files', async () => {
        const file = new File(['test'], 'data.xlsx');

        await fileParser(file);

        expect(parseExcel).toHaveBeenCalledWith(file);
    });

    it('should call parseExcel for xls files', async () => {
        const file = new File(['test'], 'data.xls');

        await fileParser(file);

        expect(parseExcel).toHaveBeenCalledWith(file);
    });

    it('should call parseCsv for csv files', async () => {
        const file = new File(['test'], 'data.csv');

        await fileParser(file);

        expect(parseCsv).toHaveBeenCalledWith(file);
    });

    it('should call parseXml for xml files', async () => {
        const file = new File(['test'], 'data.xml');

        await fileParser(file);

        expect(parseXml).toHaveBeenCalledWith(file);
    });
});