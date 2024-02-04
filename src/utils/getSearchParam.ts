export function getSearchParam(key: string): string | null {
  const search = new URLSearchParams(window.location.search);

  return search.get(key);
}
