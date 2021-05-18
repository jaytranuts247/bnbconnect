export const matchPathname = (path, regex) => {
  const found = path.match(regex);
  if (found) return true;
  return false;
};
