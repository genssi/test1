let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let nameFilm1 = prompt("Один из последних просмотренных фильмов?", "");
let rating1 = prompt("На сколько оцените его?", "");
let nameFilm2 = prompt("Один из последних просмотренных фильмов?", "");
let rating2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[nameFilm1] = rating1;
personalMovieDB.movies[nameFilm2] = rating2;

console.log(personalMovieDB);
console.log(personalMovieDB.movies);