module.exports = function createDreamTeam(arr) {
  if(!Array.isArray(arr)) return false;
  arr = arr.filter(x => typeof x === 'string' || x instanceof String);
  return arr.map(x => x.trim()).map(x => x.toUpperCase())
  .map(x => x[0]).sort().join("");
};