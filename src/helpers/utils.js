export const samePrimitiveArrays = (arr1, arr2) => {
  if(!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
  if (arr1.length !== arr2.length) return false;
  const sortCb = (a, b) => ('' + a.attr).localeCompare(b.attr);
  arr1 = [...arr1].sort(sortCb);
  arr2 = [...arr2].sort(sortCb);

  return arr1.every((v, i) => v === arr2[i]);
};
