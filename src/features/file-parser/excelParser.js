import * as XLSX from 'xlsx';

export async function parseExcel(file) {
    const buffer = await file.arrayBuffer();

    const workbook = XLSX.read(buffer);

    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    return XLSX.utils.sheet_to_json(sheet);
}