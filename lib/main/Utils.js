
    /**
     * This method returns a random number between 0 and the length of a given list of values
     * @param {Array} valueList the list with the values
     */
    function getRamdonIndex(valueList) {
        return Math.floor(Math.random() * (valueList.length + 1));
    };

    /**
     * This method gets the value for a given index of a given list of values
     * @param {Array} valueList the list of values
     * @param {Integer} index the index value of the element
     */
    function getValue(valueList, index) {
        return valueList[index];
    };
