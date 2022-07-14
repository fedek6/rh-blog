// eslint-disable-next-line import/no-anonymous-default-export
export const SITE_META = {
  name: "RealHero blog",
  description: "Dev blog",
};

export const getTitle = (title?: string): string => {
  return title ? `${title} — ${SITE_META.name}` : SITE_META.name;
};
