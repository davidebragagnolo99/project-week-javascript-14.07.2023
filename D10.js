/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("Esercizio - A");
let sum = 0;
sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("Esercizio - B");
let random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("Esercizio - C");
let me = {
  name: "Davide",
  surname: "Bragagnolo",
  age: "24",
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("Esercizio - D");
delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("Esercizio - E");
me.skills = ["html", "css", "js"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("Esercizio - F");
me.skills.push("python");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("Esercizio - G");
me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("Eserczio - 1");
function dice() {
  return Math.floor(Math.random() * 6) + 1;
}
let randomNumber = dice();
console.log(randomNumber);

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("Esercizio - 2");
const whoIsBigger = (a, b) => {
  if (a > b) {
    return a;
  }
  return b;
};
let numMax = whoIsBigger(4, 8);
console.log(numMax);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("Esercizio - 3");
const splitMe = (string) => {
  const arr = string.split(" ");
  return arr;
};
const newArr = splitMe("mi chiamo Davide");
console.log(newArr);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("Esercizio - 4");
const deleteOne = (str, bool) => {
  if (bool === true) {
    return str.slice(1);
  }
  return str.slice(0, -1);
};
let newString = deleteOne("epicode", true);
console.log(newString);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("Esercizio - 5");
const onlyLetters = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (isNaN(parseInt(str[i]))) {
      result += str[i];
    }
  }
  return result;
};
console.log(onlyLetters("I have 4 dogs"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("Esercizio - 6");
function isThisAnEmail(string) {
  const emailVerify = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // si utilizza questa espressione per verificare il formato
  return emailVerify.test(string);
}
console.log(isThisAnEmail("davidebraga.99@gmail.com"));
console.log(isThisAnEmail("davidebraga.99.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("Esercizio - 7");
function whatDayIsIt() {
  const giorni = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
  const currentDate = new Date();
  const dayIndex = currentDate.getDay();
  return giorni[dayIndex];
}
console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("Esercizio - 8");
function dice() {
  return Math.floor(Math.random() * 6) + 1;
}
function rollTheDices(numTimes) {
  let sum = 0;
  let values = [];
  for (let i = 0; i < numTimes; i++) {
    const value = dice();
    sum += value;
    values.push(value);
  }
  const result = {
    sum: sum,
    values: values,
  };
  return result;
}
const result = rollTheDices(5);
console.log(result.sum);
console.log(result.values);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("Esercizio - 9");
function howManyDays(date) {
  const currentDate = new Date();
  const time = currentDate.getTime() - date.getTime();
  const days = Math.floor(time / (1000 * 3600 * 24));
  return days;
}
const startDate = new Date(2023, 0, 1);
const daysPassed = howManyDays(startDate);
console.log(daysPassed);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("Esercizio - 10");
function isTodayMyBirthday() {
  const currentDate = new Date();
  if (currentDate.getMonth() === 6 && currentDate.getDate() === 11) {
    return true;
  } else {
    return false;
  }
}
console.log(isTodayMyBirthday());

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("Esercizio - 11");
function deleteProp(obj, string) {
  if (obj.hasOwnProperty(string)) {
    delete obj[string];
  }
  return obj;
}
const myObj = { name: "Davide", age: 24, city: "Casale Monferrato" };
const modifiedObj = deleteProp(myObj, "age");
console.log(modifiedObj);

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("Esercizio - 12");
function newestMovie(movies) {
  let newest = null;
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    if (movie.Year && !isNaN(parseInt(movie.Year))) {
      const year = parseInt(movie.Year);
      if (newest === null || year > parseInt(newest.Year)) {
        newest = movie;
      }
    }
  }
  return newest;
}
const newest = newestMovie(movies);
console.log(newest);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("Esercizio - 13");
function countMovies(movies) {
  return movies.length;
}
const movieCount = countMovies(movies);
console.log(movieCount);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("Esercizio - 14");
function onlyTheYears(movies) {
  const years = [];
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    if (movie.Year && !isNaN(parseInt(movie.Year))) {
      const year = parseInt(movie.Year);
      years.push(year);
    }
  }
  return years;
}
const yearsArray = onlyTheYears(movies);
console.log(yearsArray);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("Esercizio - 15");
function onlyInLastMillennium(movies) {
  const lastMillenniumMovies = [];
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    if (movie.Year && !isNaN(parseInt(movie.Year))) {
      const year = parseInt(movie.Year);
      if (year <= 2000 && year <= 2024) {
        lastMillenniumMovies.push(movie);
      }
    }
  }
  return lastMillenniumMovies;
}
const lastMillenniumMovies = onlyInLastMillennium(movies);
console.log(lastMillenniumMovies);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("Esercizio - 16");
function sumAllTheYears(movies) {
  let sum = 0;
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    if (movie.Year && !isNaN(parseInt(movie.Year))) {
      const year = parseInt(movie.Year);
      sum += year;
    }
  }
  return sum;
}
const totalYears = sumAllTheYears(movies);
console.log(totalYears);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("Esercizio - 17");
function searchByTitle(string, movies) {
  const matchingMovies = [];
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    if (movie.Title.toLowerCase().includes(string.toLowerCase())) {
      matchingMovies.push(movie);
    }
  }
  return matchingMovies;
}
const tot = searchByTitle("Lord", movies);
console.log(tot);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("Esercizio - 18");
function searchAndDivide(string, movies) {
  const match = [];
  const unmatch = [];
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    if (movie.Title.toLowerCase().includes(string.toLowerCase())) {
      match.push(movie);
    } else {
      unmatch.push(movie);
    }
  }
  return { match, unmatch };
}
const results = searchAndDivide("Lord", movies);
console.log(results);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("Esercizio - 19");
function removeIndex(index, movies) {
  if (index >= 0 && index < movies.length) {
    const updatedMovies = [...movies.slice(0, index), ...movies.slice(index + 1)];
    return updatedMovies;
  } else {
    return movies;
  }
}
const updatedMovies = removeIndex(2, movies);
console.log(updatedMovies);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("Esercizio - 20");
const funzione = () => {
  const myId = document.getElementById("container");
};

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("Esercizio - 21");
const funzione1 = () => {
  const myTd = document.getElementsByTagName("td");
};

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("Esercizio - 22");
const funzione2 = () => {
  for (let i = 0; i < myTd.length; i++) {
    console.log(myTd[i].innerText);
  }
};

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("Esercizio - 23");
const links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
  const link = links[i];
  link.style.backgroundColor = "red";
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("Esercizio - 24");
function addNewElementToList() {
  const myList = document.getElementById("myList");
  const newItem = document.createElement("li");
  newItem.innerText = "add new text";
  myList.appendChild(newItem);
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("Esercizio - 25");
const emptyList = () => {
  const myList = document.getElementById("myList");
  for (let i = 0; i < myList.length; i++) {
    myList[i].innerText = "";
  }
};

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("Esercizio - 26");
const addClass = () => {
  const myTr = document.getElementsByTagName("tr");
  for (let i = 0; i < myTr.length; i++) {
    myTr[i].classList.add("test");
  }
};

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("Esercizio - 27");
function halfTree(height) {
  for (let i = 0; i < height; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
halfTree(7);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log("Esercizio - 28");
function tree(height) {
  for (let i = 0; i < height; i++) {
    let row = "";
    for (let j = 0; j < height - i - 1; j++) {
      row += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      row += "*";
    }

    console.log(row);
  }
}
tree(7);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log("Esercizio - 29");
function isItPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isItPrime(17));
console.log(isItPrime(21));
