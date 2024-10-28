export const isActiveLink = (path: string): boolean =>
  location.pathname.toLowerCase() === path;
