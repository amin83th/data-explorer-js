import { describe, it, expect } from 'vitest';
import { parseXml } from './xmlParser';

describe('parseXml', () => {
    it('should parse XML file correctly', async () => {
        const xml = `
            <users>
                <user>
                    <name>John</name>
                    <age>25</age>
                </user>
            </users>
        `;

        const file = new File([xml], 'users.xml', {
            type: 'application/xml'
        });

        const result = await parseXml(file);

        expect(result).toEqual({
            users: {
                user: {
                    name: 'John',
                    age: 25
                }
            }
        });
    });
});