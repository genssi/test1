"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }

    return numberOfFilms;
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Один из последних просмотренных фильмов?", "");
        let b = prompt("На сколько оцените его?", "");
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            console.log('done');
            personalMovieDB.movies[a] = b;
        } else {
            console.log('error');
            i--;
        };
    };
}

rememberMyFilms();

function detectedPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классный зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    };
}

detectedPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    };
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let favoriteGenr = prompt(`Ваш любимый жанр под номером: ${i}`);
        personalMovieDB.genres[i - 1] = favoriteGenr;
    }
}

writeYourGenres();