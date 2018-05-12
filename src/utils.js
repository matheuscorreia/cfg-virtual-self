// @flow

export const arrayRandomElement = (a: any[]): ?any => {
  const arrayLength = a.length

  if (arrayLength === 0) return undefined;

  const index = Math.floor(Math.random() * arrayLength);

  return a[index];
}

export const flattenDeep = (arr: any[]): any[] => arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), [])
