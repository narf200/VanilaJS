let filmsQuestion = prompt("Сколько фильмов вы посмотрели ?", '')
const numberOfFilms = filmsQuestion



let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

let lastFilmQuestion0 = prompt("Один из просмотренных фильмов ?", '')
let ratingFilmQuestion0 = prompt("На сколько оцените его ?", '')
let lastFilmQuestion1 = prompt("Один из просмотренных фильмов ?", '')
let ratingFilmQuestion1 = prompt("На сколько оцените его ?", '')


personalMovieDB.movies[lastFilmQuestion0] = ratingFilmQuestion0;
personalMovieDB.movies[lastFilmQuestion1] = ratingFilmQuestion1;


console.log(lastFilmQuestion0)
console.log(numberOfFilms)
console.log(personalMovieDB)
