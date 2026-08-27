export type ImageFormat = 'png' | 'jpeg' | 'webp';

export const FORMAT_MIME: Record<ImageFormat, string> = {
  png: 'image/png',
  jpeg: 'image/jpeg',
  webp: 'image/webp',
};

/** Scales width/height down to fit within maxWidth/maxHeight, preserving aspect ratio. Never upscales. */
export function calculateDimensions(
  width: number,
  height: number,
  maxWidth?: number,
  maxHeight?: number
): { width: number; height: number } {
  let scale = 1;
  if (maxWidth && width > maxWidth) scale = Math.min(scale, maxWidth / width);
  if (maxHeight && height > maxHeight) scale = Math.min(scale, maxHeight / height);
  return { width: Math.round(width * scale), height: Math.round(height * scale) };
}

/** Draws a decoded image onto a canvas at the target size and encodes it to the target format. Browser-only (needs canvas). */
export async function convertImage(
  bitmap: ImageBitmap,
  format: ImageFormat,
  quality: number,
  maxWidth?: number,
  maxHeight?: number
): Promise<Blob> {
  const { width, height } = calculateDimensions(bitmap.width, bitmap.height, maxWidth, maxHeight);
  const canvas = new OffscreenCanvas(width, height);
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D context not available');
  ctx.drawImage(bitmap, 0, 0, width, height);
  return canvas.convertToBlob({ type: FORMAT_MIME[format], quality });
}
