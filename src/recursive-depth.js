module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if(typeof(arr) !== 'object') {
            return 0;
        }

        let result = 0;
        arr.forEach(element => {
            result = Math.max(this.calculateDepth(element), result);
        });
        return result + 1;
    }
};