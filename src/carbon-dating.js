const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(s) {
  if(Object.prototype.toString.call(s) !== "[object String]") return false;
  let s_float = parseFloat(s);
  if(Number.isNaN(s_float)) return false;
  if(s_float <= 0 || s_float > 15) return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY/s_float) / k);
}
