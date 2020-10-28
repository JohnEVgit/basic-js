module.exports = function getSeason(date) {

    let season = '';
    if (!date) {
        return 'Unable to determine the time of year!';
    }

    if (!(Object.prototype.toString.call(date) === '[object Date]')) {
        throw Error('Not implemented');
    }
    const month = +date.getMonth() + 1;

    if ((month >= 1 && month <= 2) || month === 12) {
        season = 'winter';
    } else if (month >= 3 && month <= 5) {
        season = 'spring';
    } else if (month >= 6 && month <= 8) {
        season = 'summer';
    } else if (month >= 9 && month <= 11) {
        season = 'autumn';
    } else {
        throw new Error('Not implemented');
    }
    return season;

};
