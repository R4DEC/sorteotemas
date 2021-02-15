const directorType = 'director';
const dateType = 'dates';

/**
 * This method returns a random number between 0 and the length of a given list of values
 * @param {Array} valueList the list with the values
 */
function getRamdonIndex(valueList) {
    return Math.floor(Math.random() * valueList.length);
};

/**
 * This method gets the value for a given index of a given list of values
 * @param {Array} valueList the list of values
 * @param {Integer} index the index value of the element
 */
function getValue(valueList, index) {
    return valueList[index];
};

/**
 * This method extracts a random element from a given array and then deletes it from the array
 * @param {Array} list The given array of elements
 */
function extractValueFromList(list) {
    // Get the index of the element
    var listIndex = getRamdonIndex(list);
    // Get the value of the element
    const result = getValue(list, listIndex);
    // Delete the element from the list
    list.splice(listIndex, 1);
    // Return list value
    return result;
}
/**
 * This method assigns a random value from a list to an scope object of the given type
 * @param {Array} list the list of values
 * @param {String} listType the type of the scope object
 */
function assignValueToScope(list, listType) {
    if (list.length > 0 ) {
        return extractValueFromList(list);
    } else {
        if (listType === directorType) {
            alert('NO QUEDAN DIRECTORES POR ASIGNAR');
            return '¡QUÉ LA FUERZA OS ACOMPAÑE!';
        } else {
            alert('NO QUEDAN FECHAS POR ASIGNAR');
            return '¡CORRED INSENSATOS!';
        }
    }
}

/**
 * This method generates an array with the values from 1 to the max number of students
 * @param {Number} number the number with the max number of students
 */
function fillNumberList(number) {
    const resultArray = [];
    for (let index = 1; index <= number; index++) { 
        resultArray.push(index)
    }
    return resultArray;
}

/**
 * This method assigns a random value from a number list
 * @param {Array} numberList 
 */
function getNumber(numberList) {
    if (numberList.length > 0 ) {
        return extractValueFromList(numberList);
    } else {
        alert('NO QUEDAN NÚMEROS POR ASIGNAR');
        return 'INTRODUCE OTRO NÚMERO';
    }
}

/**
 * This method process the group of dates to select from which one will start taking values
 * @param {Array} datesGroups Contains the groups of dates
 */
function processDateGroups(datesGroups) {
    let result;
    for (const datesGroup of datesGroups) {
        if(datesGroup.length) {
            result = processDateGroup(datesGroup);
            break;
        } else {
            const indexToDelete = datesGroups.indexOf(datesGroup);
            delete datesGroups[indexToDelete];
            alert('NO QUEDAN FECHAS, ¡PASAMOS AL SIGUIENTE GRUPO!');
        }
    }
    return result;
}

/**
 * This method pass the date group to the method to assing the value
 * @param {Array} dateGroup The array of date values
 */
function processDateGroup(dateGroup) {
    return assignValueToScope(dateGroup, dateType);
}
