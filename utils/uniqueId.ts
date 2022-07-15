export const uniqueId = (function () {
  const iterators = new Map<string, number>();

  return function (prefix = "id") {
    const counter = iterators.has(prefix) ? iterators.get(prefix)! + 1 : 1;
    iterators.set(prefix, counter);

    return `${prefix}-${counter}`;
  };
})();
