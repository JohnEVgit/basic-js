module.exports = class DepthCalculator {

    calculateDepth(arr) {
        if (Array.isArray(arr)) {

            if (arr.length === 0) {
                return 1;
            }

            return 1 + Math.max(...arr.map(i => this.calculateDepth(i)))

        } else {
            return 0;
        }
    }

};