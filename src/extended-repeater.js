module.exports = function repeater(str, options) {

    let result = '';
    const strStr = String(str);

    let additionStr = options.addition;
    if (typeof additionStr !== 'undefined') {
        additionStr = String(options.addition);
    }

    if (options.repeatTimes) {

        for (let i = 1; i <= options.repeatTimes; i++) {

            if (i > 1 && i <= options.repeatTimes) {
                result += (options.separator) ? options.separator : '+' ;
            }
            result += strStr;

            if (options.additionRepeatTimes && additionStr) {

                for (let j = 1; j <= options.additionRepeatTimes; j++) {
                    if (j > 1 && j <= options.additionRepeatTimes) {
                        result += (options.additionSeparator) ? options.additionSeparator : '|' ;
                    }
                    result += additionStr;
                }

            } else if (additionStr) {
                result += additionStr;
            }

        }

    } else {

        result = strStr;

        if (additionStr) {
            result += additionStr;
        }

    }

    return result;

};
  