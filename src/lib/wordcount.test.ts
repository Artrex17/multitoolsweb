import { describe, it, expect } from 'vitest';
import { countWords, countChars } from './wordcount';

describe('countWords', () => {
  it('counts words separated by whitespace', () => {
    expect(countWords('  hola   mundo  cruel ')).toBe(3);
  });

  it('returns 0 for empty or whitespace-only input', () => {
    expect(countWords('   ')).toBe(0);
    expect(countWords('')).toBe(0);
  });
});

describe('countChars', () => {
  it('counts all characters including spaces by default', () => {
    expect(countChars('a b')).toBe(3);
  });

  it('excludes whitespace when includeSpaces is false', () => {
    expect(countChars('a b\nc', false)).toBe(3);
  });
});
