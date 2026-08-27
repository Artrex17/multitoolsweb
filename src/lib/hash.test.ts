import { describe, it, expect } from 'vitest';
import { hashText } from './hash';

describe('hashText', () => {
  it('computes the known SHA-256 digest of an empty string', async () => {
    expect(await hashText('', 'SHA-256')).toBe(
      'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
    );
  });

  it('computes the known SHA-256 digest of "abc"', async () => {
    expect(await hashText('abc', 'SHA-256')).toBe(
      'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad'
    );
  });

  it('computes SHA-512 digests of a different length than SHA-256', async () => {
    const sha512 = await hashText('abc', 'SHA-512');
    expect(sha512).toHaveLength(128);
  });
});
