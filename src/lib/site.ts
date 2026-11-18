import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

/** Prefix a path with the configured base (needed if the repo is not <user>.github.io). */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
}

export const homeUrl = (lang: Lang) => url(lang === 'en' ? '' : 'es/');
export const projectUrl = (lang: Lang, slug: string) => url(lang === 'en' ? `projects/${slug}/` : `es/projects/${slug}/`);

export type Project = CollectionEntry<'projects'> & { slug: string; lang: Lang };

/** Projects of one language, in display order. Entry ids look like "en/webserv". */
export async function getProjects(lang: Lang): Promise<Project[]> {
  const all = await getCollection('projects', (p) => p.id.startsWith(`${lang}/`));
  return all
    .map((p) => ({ ...p, slug: p.id.split('/')[1], lang }))
    .sort((a, b) => a.data.order - b.data.order);
}

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Escape text and turn `backticks` into <code> elements. */
export function inline(text: string): string {
  return text
    .split('`')
    .map((part, i) => (i % 2 ? `<code>${escape(part)}</code>` : escape(part)))
    .join('');
}

export const pad = (n: number) => String(n).padStart(2, '0');
