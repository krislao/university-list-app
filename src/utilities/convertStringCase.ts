export const toKebabCase = (nonKebab: string): string =>
  nonKebab
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
