import { describe, it, expect, vi, beforeEach } from 'vitest';
import { xmlDownloader } from './xml-downloader';

describe('xmlDownloader', () => {

  beforeEach(() => {
    vi.restoreAllMocks();
  });


  it('should not download anything when data is empty', () => {
    const createElementSpy = vi.spyOn(document, 'createElement');

    xmlDownloader([]);

    expect(createElementSpy).not.toHaveBeenCalled();
  });


  it('should create and download XML file', () => {
    const data = [
      {
        name: 'Ali',
        age: 25
      },
      {
        name: 'Reza',
        age: 30
      }
    ];

    const clickMock = vi.fn();

    const link = {
      href: '',
      download: '',
      click: clickMock
    };

    vi.spyOn(document, 'createElement').mockReturnValue(link);

    vi.spyOn(document.body, 'appendChild').mockImplementation(() => {});
    vi.spyOn(document.body, 'removeChild').mockImplementation(() => {});

    const createObjectURLMock = vi
      .spyOn(URL, 'createObjectURL')
      .mockReturnValue('blob:test');

    const revokeObjectURLMock = vi
      .spyOn(URL, 'revokeObjectURL')
      .mockImplementation(() => {});

    xmlDownloader(data);

    expect(createObjectURLMock).toHaveBeenCalledTimes(1);

    expect(link.href).toBe('blob:test');
    expect(link.download).toBe('XmlOutput');

    expect(document.body.appendChild).toHaveBeenCalledWith(link);
    expect(clickMock).toHaveBeenCalledTimes(1);
    expect(document.body.removeChild).toHaveBeenCalledWith(link);

    expect(revokeObjectURLMock).toHaveBeenCalledWith('blob:test');
  });


  it('should generate XML structure correctly', () => {
    const data = [
      {
        name: 'Ali',
        age: 25
      }
    ];

    let createdBlob;

    const clickMock = vi.fn();

    const link = {
      href: '',
      download: '',
      click: clickMock
    };

    vi.spyOn(document, 'createElement').mockReturnValue(link);

    vi.spyOn(document.body, 'appendChild').mockImplementation(() => {});
    vi.spyOn(document.body, 'removeChild').mockImplementation(() => {});

    vi.spyOn(URL, 'createObjectURL').mockImplementation((blob) => {
      createdBlob = blob;
      return 'blob:test';
    });

    vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});

    xmlDownloader(data);

    expect(createdBlob).toBeInstanceOf(Blob);

    expect(createdBlob.type).toBe(
      'application/xml;charset=utf-8;'
    );

    const reader = new FileReader();

    return new Promise((resolve) => {
      reader.onload = () => {
        const xml = reader.result;

        expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>');
        expect(xml).toContain('<amin83th>');
        expect(xml).toContain('<user>');
        expect(xml).toContain('<name>Ali</name>');
        expect(xml).toContain('<age>25</age>');
        expect(xml).toContain('</user>');
        expect(xml).toContain('</amin83th>');

        resolve();
      };

      reader.readAsText(createdBlob);
    });
  });


  it('should use CDATA for values containing special XML characters', () => {
    const data = [
      {
        description: 'Ali <admin> & Reza'
      }
    ];

    let createdBlob;

    const clickMock = vi.fn();

    const link = {
      href: '',
      download: '',
      click: clickMock
    };

    vi.spyOn(document, 'createElement').mockReturnValue(link);

    vi.spyOn(document.body, 'appendChild').mockImplementation(() => {});
    vi.spyOn(document.body, 'removeChild').mockImplementation(() => {});

    vi.spyOn(URL, 'createObjectURL').mockImplementation((blob) => {
      createdBlob = blob;
      return 'blob:test';
    });

    vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});

    xmlDownloader(data);

    const reader = new FileReader();

    return new Promise((resolve) => {
      reader.onload = () => {
        const xml = reader.result;

        expect(xml).toContain(
          '<description><![CDATA[Ali <admin> & Reza]]></description>'
        );

        resolve();
      };

      reader.readAsText(createdBlob);
    });
  });

});