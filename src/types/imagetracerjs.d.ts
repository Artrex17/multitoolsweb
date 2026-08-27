declare module 'imagetracerjs' {
  const ImageTracer: {
    imagedataToSVG(imageData: ImageData, options?: unknown): string;
  };
  export default ImageTracer;
}
