export const uniqueId = (function (prefix = "id") {
  let counter = 0;
  return function () {
    return `${prefix}-${counter++}`;
  };
})();
