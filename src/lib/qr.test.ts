import { describe, it, expect } from 'vitest';
import { generateQrSvg } from './qr';

describe('generateQrSvg', () => {
  it('produces an SVG document', async () => {
    const svg = await generateQrSvg('https://example.com');
    expect(svg.trim().startsWith('<svg')).toBe(true);
  });
});
