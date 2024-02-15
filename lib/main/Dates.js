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
    "Grupo 1 - Orden 1 - 04/04/2024", "Grupo 1 - Orden 2 - 04/04/2024", "Grupo 1 - Orden 3 - 04/04/2024",
    "Grupo 1 - Orden 1 - 11/04/2024", "Grupo 1 - Orden 2 - 11/04/2024", "Grupo 1 - Orden 3 - 11/04/2024",
    "Grupo 1 - Orden 1 - 18/04/2024", "Grupo 1 - Orden 2 - 18/04/2024", "Grupo 1 - Orden 3 - 18/04/2024",
    "Grupo 1 - Orden 1 - 25/04/2024", "Grupo 1 - Orden 2 - 25/04/2024", "Grupo 1 - Orden 3 - 25/04/2024",
    "Grupo 1 - Orden 1 - 02/05/2024", "Grupo 1 - Orden 2 - 02/05/2024", "Grupo 1 - Orden 3 - 02/05/2024",
    "Grupo 1 - Orden 1 - 09/05/2024", "Grupo 1 - Orden 2 - 09/05/2024", "Grupo 1 - Orden 3 - 09/05/2024",
    "Grupo 1 - Orden 1 - 16/05/2024", "Grupo 1 - Orden 2 - 16/05/2024", "Grupo 1 - Orden 3 - 16/05/2024",
    "Grupo 1 - Orden 1 - 23/05/2024", "Grupo 1 - Orden 2 - 23/05/2024", "Grupo 1 - Orden 3 - 23/05/2024",
];
const grupo2 = [
    "Grupo 2 - Orden 1 - 04/04/2024", "Grupo 2 - Orden 2 - 04/04/2024", "Grupo 2 - Orden 3 - 04/04/2024",
    "Grupo 2 - Orden 1 - 11/04/2024", "Grupo 2 - Orden 2 - 11/04/2024", "Grupo 2 - Orden 3 - 11/04/2024",
    "Grupo 2 - Orden 1 - 18/04/2024", "Grupo 2 - Orden 2 - 18/04/2024", "Grupo 2 - Orden 3 - 18/04/2024",
    "Grupo 2 - Orden 1 - 25/04/2024", "Grupo 2 - Orden 2 - 25/04/2024", "Grupo 2 - Orden 3 - 25/04/2024",
    "Grupo 2 - Orden 1 - 02/05/2024", "Grupo 2 - Orden 2 - 02/05/2024", "Grupo 2 - Orden 3 - 02/05/2024",
    "Grupo 2 - Orden 1 - 09/05/2024", "Grupo 2 - Orden 2 - 09/05/2024", "Grupo 2 - Orden 3 - 09/05/2024",
    "Grupo 2 - Orden 1 - 16/05/2024", "Grupo 2 - Orden 2 - 16/05/2024", "Grupo 2 - Orden 3 - 16/05/2024",
    "Grupo 2 - Orden 1 - 23/05/2024", "Grupo 2 - Orden 2 - 23/05/2024", "Grupo 2 - Orden 3 - 23/05/2024",
];
const dates = [ grupo1, grupo2 ];
const groupKeys =  ['GRUPO 1', 'GRUPO 2'];

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
