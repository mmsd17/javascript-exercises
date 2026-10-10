const sumAll = function(startNumber, endNumber) {
    if (startNumber < 0 || endNumber < 0 || !Number.isInteger(startNumber) || !Number.isInteger(endNumber) ) {
        return 'ERROR'
    }

    let sum = 0;
    
    if (startNumber > endNumber) {
        while (startNumber >= endNumber) {
            sum += startNumber;
            --startNumber;
        }
    }
    else {
        while (startNumber <= endNumber) {
            sum += startNumber;
            ++startNumber;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
