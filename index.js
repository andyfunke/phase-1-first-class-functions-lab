// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
    let newArray = [];
    newArray[0] = array[0];
    newArray[1] = array[1];
    return newArray;
}

const returnLastTwoDrivers = function (array) {
    let newArray = [];
    newArray[0] = array[2];
    newArray[1] = array[3];
    return newArray;
}

const selectingDrivers = [(returnFirstTwoDrivers), (returnLastTwoDrivers)];

const createFareMultiplier = function (multiplier) {
    return function (fare) {
        return fare*multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (arrayOfDriver, functionVar) {
    return functionVar(arrayOfDriver);
}