import { describe, it, expect } from 'vitest';
import * as XLSX from 'xlsx';
import { parseExcel } from './excelParser';

describe('parseExcel', () => {
    it('should parse Excel file correctly', async () => {
        const data = [
            {
                name: 'John',
                age: 25
            },
            {
                name: 'Jane',
                age: 30
            }
        ];

        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');

        const buffer = XLSX.write(workbook, {
            type: 'array',
            bookType: 'xlsx'
        });

        const file = new File(
            [buffer],
            'users.xlsx',
            {
                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            }
        );

        const result = await parseExcel(file);

        expect(result).toEqual(data);
    });
});