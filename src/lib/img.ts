import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>('../assets/images/*', { eager: true });

/** Look up an image in src/assets/images by file name, failing the build if it is missing. */
export function img(name: string): ImageMetadata {
  const mod = images[`../assets/images/${name}`];
  if (!mod) throw new Error(`Image not found in src/assets/images: ${name}`);
  return mod.default;
}
