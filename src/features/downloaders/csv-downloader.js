


export function csvDownloader(data) {
    if (data.length === 0) return;

    const headers = Object.keys(data[0]);

    const csvRows = [];
    csvRows.push(headers.join(','));

    for (const row of data) {
        const values = headers.map(header => {
            const value = row[header] || '';
            return typeof value === 'string' && (value.includes(',') || value.includes('"'))
                ? `"${value.replace(/"/g, '""')}"`
                : value;
        });
        csvRows.push(values.join(','));
    }

    const csvString = csvRows.join('\n');
    const blob = new Blob(['\uFEFF' + csvString], { type: 'text/csv;charset=utf-8;' }); // \uFEFF برای پشتیبانی از فارسی

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'csvOutput';
    link.click();
    URL.revokeObjectURL(link.href);
}