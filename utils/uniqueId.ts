export const uniqueId = (function () {
  let counter = 0;
  return function (prefix = "id") {
    return `${prefix}-${counter++}`;
  };
})();
