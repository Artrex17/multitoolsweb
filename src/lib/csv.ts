import Papa from 'papaparse';

export function jsonToCsv(json: string): string {
  const data = JSON.parse(json);
  const rows = Array.isArray(data) ? data : [data];
  return Papa.unparse(rows);
}

export function csvToJson(csv: string): string {
  const result = Papa.parse(csv.trim(), { header: true, skipEmptyLines: true, delimiter: ',' });
  if (result.errors.length) throw new Error(result.errors[0].message);
  return JSON.stringify(result.data, null, 2);
}
