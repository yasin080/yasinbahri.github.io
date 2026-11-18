import type { Lang } from '../i18n/ui';
import { getProjects } from './site';

/** Static paths for the project pages of one language, with previous/next for the footer nav. */
export async function projectPaths(lang: Lang) {
  const projects = await getProjects(lang);
  return projects.map((project, index) => ({
    params: { slug: project.slug },
    props: {
      project,
      index,
      total: projects.length,
      prev: projects[(index - 1 + projects.length) % projects.length],
      next: projects[(index + 1) % projects.length],
    },
  }));
}
