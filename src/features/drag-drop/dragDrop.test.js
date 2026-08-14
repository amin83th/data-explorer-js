import { beforeEach, describe, expect, it, vi } from 'vitest';
import { dragDrop } from './dragDrop';
import { fileParser } from '../file-parser/fileParser';

vi.mock('../file-parser/fileParser', () => ({
    fileParser: vi.fn()
}));

describe('dragDrop', () => {

    let section;

    beforeEach(() => {
        section = dragDrop();
    });

    it('should create drag drop component', () => {
        expect(section.tagName).toBe('SECTION');
    });

    it('should render drop zone', () => {
        const dropZone = section.querySelector('#drag-drop-wrapper');
        expect(dropZone).not.toBeNull();
    });

    it('should render file input', () => {
        const fileInput = section.querySelector(
            'input[type="file"]'
        );
        expect(fileInput).not.toBeNull();
    });

    it('should accept supported file types', () => {
        const fileInput = section.querySelector(
            'input[type="file"]'
        );
        expect(fileInput.getAttribute('accept'))
            .toBe('.xml,.xlsx,.xls,.csv');
    });

    it('should open file input when drop zone is clicked', () => {
        const dropZone = section.querySelector(
            '#drag-drop-wrapper'
        );
        const fileInput = section.querySelector(
            'input[type="file"]'
        );
        const clickSpy = vi.spyOn(fileInput, 'click')
            .mockImplementation(() => { });
        dropZone.click();
        expect(clickSpy).toHaveBeenCalledTimes(1);
    });

    it('should call fileParser when a file is selected', async () => {
        const fileInput = section.querySelector(
            'input[type="file"]'
        );
        const file = new File(
            ['hello'],
            'test.csv',
            { type: 'text/csv' }
        );
        fileParser.mockResolvedValue({
            name: 'test.csv',
            rows: []
        });
        Object.defineProperty(fileInput, 'files', {
            value: [file]
        });
        fileInput.dispatchEvent(new Event('change'));
        await Promise.resolve();
        expect(fileParser).toHaveBeenCalledTimes(1);
        expect(fileParser).toHaveBeenCalledWith(file);
    });
});