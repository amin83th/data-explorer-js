import * as XLSX from 'xlsx';

export function exelDownloader(data) {
    if (data.length === 0) return;

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, "excelOutput.xlsx");
}