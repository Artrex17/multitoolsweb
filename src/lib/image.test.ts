import { describe, it, expect } from 'vitest';
import { calculateDimensions } from './image';

describe('calculateDimensions', () => {
  it('leaves the image untouched when it already fits', () => {
    expect(calculateDimensions(800, 600, 1000, 1000)).toEqual({ width: 800, height: 600 });
  });

  it('scales down to fit maxWidth, preserving aspect ratio', () => {
    expect(calculateDimensions(2000, 1000, 1000)).toEqual({ width: 1000, height: 500 });
  });

  it('scales down to fit maxHeight, preserving aspect ratio', () => {
    expect(calculateDimensions(1000, 2000, undefined, 1000)).toEqual({ width: 500, height: 1000 });
  });

  it('never upscales when no max is exceeded', () => {
    expect(calculateDimensions(100, 100, 500, 500)).toEqual({ width: 100, height: 100 });
  });

  it('applies the tighter of both constraints', () => {
    expect(calculateDimensions(2000, 1000, 1000, 100)).toEqual({ width: 200, height: 100 });
  });
});
