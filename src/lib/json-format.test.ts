import { describe, it, expect } from 'vitest';
import { formatJson, minifyJson } from './json-format';

describe('formatJson', () => {
  it('pretty-prints with the given indent', () => {
    expect(formatJson('{"a":1,"b":[1,2]}', 2)).toBe('{\n  "a": 1,\n  "b": [\n    1,\n    2\n  ]\n}');
  });

  it('throws on invalid JSON', () => {
    expect(() => formatJson('{not json}')).toThrow();
  });
});

describe('minifyJson', () => {
  it('removes all insignificant whitespace', () => {
    expect(minifyJson('{\n  "a": 1\n}')).toBe('{"a":1}');
  });
});
