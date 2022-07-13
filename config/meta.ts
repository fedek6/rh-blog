// eslint-disable-next-line import/no-anonymous-default-export
export const siteMeta = {
  name: "RealHero blog",
  description: "Dev blog",
};

export const getTitle = (title?: string): string => {
  return title ? `${title} — ${siteMeta.name}` : siteMeta.name;
};
