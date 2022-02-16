// The dates list
const grupo3 = [
    "Grupo 3 - Orden 1 - 16/03/2022", "Grupo 3 - Orden 2 - 16/03/2022", "Grupo 3 - Orden 3 - 16/03/2022",
    "Grupo 3 - Orden 1 - 23/03/2022", "Grupo 3 - Orden 2 - 23/03/2022", "Grupo 3 - Orden 3 - 23/03/2022",
    "Grupo 3 - Orden 1 - 30/03/2022", "Grupo 3 - Orden 2 - 30/03/2022", "Grupo 3 - Orden 3 - 30/03/2022",
    "Grupo 3 - Orden 1 - 06/04/2022", "Grupo 3 - Orden 2 - 06/04/2022", "Grupo 3 - Orden 3 - 06/04/2022",
    "Grupo 3 - Orden 1 - 20/04/2022", "Grupo 3 - Orden 2 - 20/04/2022", "Grupo 3 - Orden 3 - 20/04/2022",
    "Grupo 3 - Orden 1 - 27/04/2022", "Grupo 3 - Orden 2 - 27/04/2022", "Grupo 3 - Orden 3 - 27/04/2022",
    "Grupo 3 - Orden 1 - 04/05/2022", "Grupo 3 - Orden 2 - 04/05/2022", "Grupo 3 - Orden 3 - 04/05/2022",
    "Grupo 3 - Orden 1 - 11/05/2022", "Grupo 3 - Orden 2 - 11/05/2022", "Grupo 3 - Orden 3 - 11/05/2022"
];
const grupo1 = [
    "Grupo 1 - Orden 1 - 17/03/2022", "Grupo 1 - Orden 2 - 17/03/2022", "Grupo 1 - Orden 3 - 17/03/2022",
    "Grupo 1 - Orden 1 - 24/03/2022", "Grupo 1 - Orden 2 - 24/03/2022", "Grupo 1 - Orden 3 - 24/03/2022",
    "Grupo 1 - Orden 1 - 31/03/2022", "Grupo 1 - Orden 2 - 31/03/2022", "Grupo 1 - Orden 3 - 31/03/2022",
    "Grupo 1 - Orden 1 - 07/04/2022", "Grupo 1 - Orden 2 - 07/04/2022", "Grupo 1 - Orden 3 - 07/04/2022",
    "Grupo 1 - Orden 1 - 21/04/2022", "Grupo 1 - Orden 2 - 21/04/2022", "Grupo 1 - Orden 3 - 21/04/2022",
    "Grupo 1 - Orden 1 - 28/04/2022", "Grupo 1 - Orden 2 - 28/04/2022", "Grupo 1 - Orden 3 - 28/04/2022",
    "Grupo 1 - Orden 1 - 05/05/2022", "Grupo 1 - Orden 2 - 05/05/2022", "Grupo 1 - Orden 3 - 05/05/2022",
    "Grupo 1 - Orden 1 - 12/05/2022", "Grupo 1 - Orden 2 - 12/05/2022", "Grupo 1 - Orden 3 - 12/05/2022"
];
const grupo2 = [
    "Grupo 2 - Orden 4 - 17/03/2022", "Grupo 2 - Orden 5 - 17/03/2022", "Grupo 2 - Orden 6 - 17/03/2022",
    "Grupo 2 - Orden 4 - 24/03/2022", "Grupo 2 - Orden 5 - 24/03/2022", "Grupo 2 - Orden 6 - 24/03/2022",
    "Grupo 2 - Orden 4 - 31/03/2022", "Grupo 2 - Orden 5 - 31/03/2022", "Grupo 2 - Orden 6 - 31/03/2022",
    "Grupo 2 - Orden 4 - 07/04/2022", "Grupo 2 - Orden 5 - 07/04/2022", "Grupo 2 - Orden 6 - 07/04/2022",
    "Grupo 2 - Orden 4 - 21/04/2022", "Grupo 2 - Orden 5 - 21/04/2022", "Grupo 2 - Orden 6 - 21/04/2022",
    "Grupo 2 - Orden 4 - 28/04/2022", "Grupo 2 - Orden 5 - 28/04/2022", "Grupo 2 - Orden 6 - 28/04/2022",
    "Grupo 2 - Orden 4 - 05/05/2022", "Grupo 2 - Orden 5 - 05/05/2022", "Grupo 2 - Orden 6 - 05/05/2022",
    "Grupo 2 - Orden 4 - 12/05/2022", "Grupo 2 - Orden 5 - 12/05/2022", "Grupo 2 - Orden 6 - 12/05/2022"
];
const dates = [ grupo3, grupo1, grupo2 ];
const groupKeys =  ['GRUPO 3','GRUPO 1', 'GRUPO 2'];

/**
 * This methods returns an array of dates
 */
function getDates() {
    return JSON.parse(JSON.stringify(dates));
};

/**
 * This method returns the groupKeys
 */
function getGroupkeys() {
    return groupKeys;
}
