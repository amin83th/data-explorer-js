import { describe, it, expect } from "vitest";
import { parseXml } from "./parseXml";

describe("parseXml", () => {
    it("should parse XML file and return the first array found", async () => {
        const xml = `
            <users>
                <user>
                    <name>Ali</name>
                    <age>25</age>
                </user>
                <user>
                    <name>Reza</name>
                    <age>30</age>
                </user>
            </users>
        `;

        const file = {
            text: async () => xml
        };

        const result = await parseXml(file);

        expect(result).toEqual([
            {
                name: "Ali",
                age: 25
            },
            {
                name: "Reza",
                age: 30
            }
        ]);
    });
});