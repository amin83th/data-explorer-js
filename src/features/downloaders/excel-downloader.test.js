import { describe, it, expect, vi } from 'vitest';

const { writeFileMock } = vi.hoisted(() => ({
  writeFileMock: vi.fn(),
}));

vi.mock('xlsx', () => ({
  utils: {
    book_new: vi.fn(() => ({})),
    json_to_sheet: vi.fn(() => ({})),
    book_append_sheet: vi.fn(),
  },
  writeFile: writeFileMock,
}));

import { exelDownloader } from './excel-downloader';


describe('exelDownloader', () => {

  it('should not create an Excel file when data is empty', () => {
    exelDownloader([]);

    expect(writeFileMock).not.toHaveBeenCalled();
  });


  it('should create an Excel file when data is provided', () => {
    const data = [
      { name: 'Ali', age: 25 },
      { name: 'Reza', age: 30 },
    ];

    exelDownloader(data);

    expect(writeFileMock).toHaveBeenCalledTimes(1);

    expect(writeFileMock).toHaveBeenCalledWith(
      expect.anything(),
      'excelOutput.xlsx'
    );
  });

});