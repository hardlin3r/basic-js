module.exports = function getSeason(date) {
  if(date === undefined) return "Unable to determine the time of year!";
  if(date instanceof Date && typeof date.getMonth === 'function' && !date.hasOwnProperty("getMonth")) {
    let monthIndex = date.getMonth();
    if(monthIndex == 0 || monthIndex == 1 || monthIndex == 11) {
      return "winter";
    } else if(monthIndex >= 2 && monthIndex <= 4) {
      return "spring";
    } else if(monthIndex >=5 && monthIndex <= 7) {
      return "summer";
    } else if(monthIndex >= 8 && monthIndex <= 10) {
      return "autumn";
    }
  } else {
    throw new Error("Invalid argument");
  }
};
