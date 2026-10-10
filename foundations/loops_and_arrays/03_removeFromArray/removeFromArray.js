const removeFromArray = function(arr,...targetElement) {
    let finalArray = arr.filter(target => !targetElement.includes(target));
    return finalArray;
}

//return arr.filter((target) => target !== targetElement)

// Do not edit below this line
module.exports = removeFromArray;
