import { rules } from './rules';
import { uid } from './random';

export interface UploadFile { name: string; mimeType: string; buffer: Buffer }

/** In-memory file for page.setInputFiles(). Nothing is stored in the repo. */
export function buildFile(bytes: number, ext: 'jpg' | 'png' | 'gif' | 'pdf' | 'txt' = 'jpg'): UploadFile {
  const mime = { jpg: 'image/jpeg', png: 'image/png', gif: 'image/gif', pdf: 'application/pdf', txt: 'text/plain' }[ext];
  return { name: `auto_${uid(6)}.${ext}`, mimeType: mime, buffer: Buffer.alloc(bytes, 1) };
}

/** Boundary sizes derived from the 1MB rule. */
export const fileSizes = {
  small: () => 10 * 1024,
  exactlyAtLimit: () => rules.photo.maxBytes,
  justOverLimit: () => rules.photo.maxBytes + 1,
};
