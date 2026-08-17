// Not a React hook — just a plain array split. Splitting a few dozen
// strings is cheap enough that useMemo would only cost a client-component
// boundary for no benefit, so this stays a plain function usable from
// Server Components too.
export function splitContent<T>(items: T[] = []) {
  const splitIndex = Math.ceil(items.length / 2);

  return {
    firstPart: items.slice(0, splitIndex),
    secondPart: items.slice(splitIndex),
    secondPartStartIndex: splitIndex,
  };
}
