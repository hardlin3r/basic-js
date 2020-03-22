module.exports = function repeater(str, options) {
    let result;

    let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
    let separator = options.separator ? options.separator : '+';
    let addition = (typeof options.addition !== 'undefined') ? options.addition : '';
    let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
    let additionSeparator = options.additionSeparator ? options.additionSeparator : '';

    let firstIteration = addition;
    if (additionRepeatTimes) {
        for (let i = 1; i < additionRepeatTimes; i++) {
            firstIteration += additionSeparator + addition;
        }
    }

    let secondIteration = str + firstIteration;
    result = secondIteration;
    if (repeatTimes) {
        for (let i = 1; i < repeatTimes; i++) {
            result += separator + secondIteration;
        }
    }

    return result;
};
