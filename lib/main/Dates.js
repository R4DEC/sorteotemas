// The dates list
const grupo1 = [
    "Orden 1 - 17/03/2021", "Orden 2 - 17/03/2021", "Orden 3 - 17/03/2021",
    "Orden 1 - 24/03/2021", "Orden 2 - 24/03/2021", "Orden 3 - 24/03/2021",
    "Orden 1 - 07/04/2021", "Orden 2 - 07/04/2021", "Orden 3 - 07/04/2021",
    "Orden 1 - 14/04/2021", "Orden 2 - 14/04/2021", "Orden 3 - 14/04/2021",
    "Orden 1 - 21/04/2021", "Orden 2 - 21/04/2021", "Orden 3 - 21/04/2021",
    "Orden 1 - 28/04/2021", "Orden 2 - 28/04/2021", "Orden 3 - 28/04/2021",
    "Orden 1 - 05/05/2021", "Orden 2 - 05/05/2021", "Orden 3 - 05/05/2021",
    "Orden 1 - 12/05/2021", "Orden 2 - 12/05/2021", "Orden 3 - 12/05/2021"
];
const grupo2Bloque1 = [
    "Orden 1 - 18/03/2021", "Orden 2 - 18/03/2021", "Orden 3 - 18/03/2021",
    "Orden 1 - 25/03/2021", "Orden 2 - 25/03/2021", "Orden 3 - 25/03/2021",
    "Orden 1 - 08/04/2021", "Orden 2 - 08/04/2021", "Orden 3 - 08/04/2021",
    "Orden 1 - 15/04/2021", "Orden 2 - 15/04/2021", "Orden 3 - 15/04/2021",
    "Orden 1 - 22/04/2021", "Orden 2 - 22/04/2021", "Orden 3 - 22/04/2021",
    "Orden 1 - 29/04/2021", "Orden 2 - 29/04/2021", "Orden 3 - 29/04/2021",
    "Orden 1 - 06/05/2021", "Orden 2 - 06/05/2021", "Orden 3 - 06/05/2021",
    "Orden 1 - 13/05/2021", "Orden 2 - 13/05/2021", "Orden 3 - 13/05/2021"
];
const grupo2Bloque2 = [
    "Orden 4 - 18/03/2021", "Orden 5 - 18/03/2021", "Orden 6 - 18/03/2021",
    "Orden 4 - 25/03/2021", "Orden 5 - 25/03/2021", "Orden 6 - 25/03/2021",
    "Orden 4 - 08/04/2021", "Orden 5 - 08/04/2021", "Orden 6 - 08/04/2021",
    "Orden 4 - 15/04/2021", "Orden 5 - 15/04/2021", "Orden 6 - 15/04/2021",
    "Orden 4 - 22/04/2021", "Orden 5 - 22/04/2021", "Orden 6 - 22/04/2021",
    "Orden 4 - 29/04/2021", "Orden 5 - 29/04/2021", "Orden 6 - 29/04/2021",
    "Orden 4 - 06/05/2021", "Orden 5 - 06/05/2021", "Orden 6 - 06/05/2021",
    "Orden 4 - 13/05/2021", "Orden 5 - 13/05/2021", "Orden 6 - 13/05/2021"
];
const dates = [ grupo1, grupo2Bloque2, grupo2Bloque1];

/**
 * This methods returns an array of dates
 */
function getDates() {
    return JSON.parse(JSON.stringify(dates));
};
