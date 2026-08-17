import { describe, it, expect } from 'vitest';
import { parseCsv } from './csvParser';

describe('parseCsv', () => {
    it('should parse CSV file correctly', async () => {
        const csv = `name,age
John,25
Jane,30`;

        const file = new File([csv], 'users.csv', {
            type: 'text/csv'
        });

        const result = await parseCsv(file);

        expect(result).toEqual([
            {
                name: 'John',
                age: '25'
            },
            {
                name: 'Jane',
                age: '30'
            }
        ]);
    });
});