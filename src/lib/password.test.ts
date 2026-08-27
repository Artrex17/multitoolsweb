import { describe, it, expect } from 'vitest';
import { generatePassword } from './password';

describe('generatePassword', () => {
  it('generates a password of the requested length', () => {
    const pw = generatePassword({ length: 16, lowercase: true, uppercase: false, numbers: false, symbols: false });
    expect(pw).toHaveLength(16);
  });

  it('only uses characters from the enabled sets', () => {
    const pw = generatePassword({ length: 200, lowercase: true, uppercase: false, numbers: true, symbols: false });
    expect(pw).toMatch(/^[a-z0-9]+$/);
  });

  it('throws when no character set is enabled', () => {
    expect(() => generatePassword({ length: 10, lowercase: false, uppercase: false, numbers: false, symbols: false })).toThrow();
  });
});
