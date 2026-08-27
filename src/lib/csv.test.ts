import { describe, it, expect } from 'vitest';
import { jsonToCsv, csvToJson } from './csv';

describe('jsonToCsv', () => {
  it('converts an array of flat objects to CSV with a header row', () => {
    const csv = jsonToCsv('[{"name":"Ana","age":30},{"name":"Luis","age":25}]');
    expect(csv).toBe('name,age\r\nAna,30\r\nLuis,25');
  });

  it('quotes fields containing commas', () => {
    const csv = jsonToCsv('[{"city":"Springfield, USA"}]');
    expect(csv).toBe('city\r\n"Springfield, USA"');
  });
});

describe('csvToJson', () => {
  it('converts CSV with a header row into an array of objects', () => {
    const json = csvToJson('name,age\nAna,30\nLuis,25');
    expect(JSON.parse(json)).toEqual([
      { name: 'Ana', age: '30' },
      { name: 'Luis', age: '25' },
    ]);
  });

  it('handles quoted fields containing commas', () => {
    const json = csvToJson('city\n"Springfield, USA"');
    expect(JSON.parse(json)).toEqual([{ city: 'Springfield, USA' }]);
  });
});
