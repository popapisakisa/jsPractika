"use strict"
const numerOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');//промпт вопроса
const numerOfFilmsDB = { // создание объекта 
    count: numerOfFilms, // переменной для ответа
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", ''),
        b = +prompt("На сколько вы его оцените?", ''),
        c = prompt("Один из последних просмотренных фильмов?", ''),
        d = +prompt("На сколько вы его оцените?", '');
numerOfFilmsDB.movies[a] = b;
numerOfFilmsDB.movies[c] = d;

console.log(numerOfFilmsDB);