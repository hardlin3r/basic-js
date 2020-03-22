module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turn = Math.pow(2, disksNumber) - 1;
    let seconds = turn / (turnsSpeed / 3600);

    let result = {
        'turns' : turn,
        'seconds' : seconds
    };

    return result;
}