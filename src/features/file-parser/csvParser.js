import Papa from 'papaparse';

export function parseCsv(file) {
    return new Promise((resolve, reject) => {
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,

            complete: (result) => {
                resolve(result.data);
            },

            error: (error) => {
                reject(error);
            }
        });
    });
}