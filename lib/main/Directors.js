// The director list
const directors = [
    'George Méliès', 'David Wark Griffith', 'Cecil B. de Mille', 'David Cronenberg',
    'Ernst Lubitsch', 'Robert Flaherty', 'Dziga Vertov', 'Robert Zemeckis',
    'Charles Chaplin', 'Robert Wiene', 'Alfonso Cuarón', 'Oliver Stone',
    'Fritz Lang', 'Einsenstein', 'Luis Buñuel', 'Paul Verhoeven', 
    'Jean Vigo', 'Jean Renoir', 'Leni Reifenstahl', 'David Lean',
    'Roberto Rossellini', 'Vitorio de Sica', 'King Vidor', 'John Lasseter',
    'Howard Hawks', 'John Ford', 'Billy Wilder', 'Buster Keaton',
    'Otto Preminger', 'John Huston', 'Joseph L. Mankiewicz', 'Milos Forman', 
    'Orson Welles', 'Elian Kazan', 'Jean Luc Godard', 'George Cukor',
    'Françoise Truffaut', 'Alain Resnais', 'Claude Chabrol', 'Terry Gilliam',
    'Eric Romher', 'Yasujiro Ozu', 'Kenji Mizoguchi', 'Guillermo del Toro',
    'Akira Kurosawa', 'Stanley Kubrick', 'Robert Mulligan', 'Wes Anderson',
    'Martin Ritt', 'John Frankenheimer', 'Arthur Penn', 'Michael Haneke',
    'Sidney Lumet', 'Robert Altman', 'Francis F. Coppola', 'Peter Jackson',
    'Martin Scorsese', 'Steven Speilberg', 'Sam Mendes', 'Alejandro González Iñárritu',
    'Ridley Scott', 'George Lucas', 'Brian de Palma', 'Lars von Trier',
    'Jim Jarmusch', 'M. Night Shyamalan', 'Peter Weir', 'Sergio Leone',
    'Joel y Ethan Coen', 'Wong Kar-Wai', 'Sofia Coppola', 'James Cameron',
    'Kathryn Bigelow', 'Agnés Varda', 'Jane Campion', 'Clint Eastwood',
    'Penny Marshall', 'Isabel Coixet', 'Quentin Tarantino', 'Christopher Nolan',
    'Alfred Hitchcock', 'Woody Allen', 'Federico Fellini', 'Tim Burton',
    'David Lynch', 'Roman Polanski','Hayao Miyazaki'
];

/**
* This methods returns an array of directors
*/
function getDirectors() {
    return Object.assign([], directors);
};