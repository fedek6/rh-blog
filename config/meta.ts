// eslint-disable-next-line import/no-anonymous-default-export
export const SITE_META = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Blog name",
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION ?? "Site description",
};

export const getTitle = (title?: string): string => {
  return title ? `${title} — ${SITE_META.name}` : SITE_META.name;
};
