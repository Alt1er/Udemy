"use strict"

let num = 20;

function showFirstMassege(text) {
    console.log(text)
    let num = 10;
    console.log(num)
}

showFirstMassege("Hello world");
console.log(num)



function calc(a,b){
    return (a + b);
}

console.log(calc(3,4));
console.log(calc(5,6));
console.log(calc(14,14));

function ret(){
    let num = 50;
    return num;
}

const anoherNum = ret();
console.log(anoherNum)


const loger = function() {
    console.log("Hellow world")
};
loger();

























// const numberOfFilms = prompt('Скільки фільмів ви вж переглянули?', '');

    
// const personalMovieDB = {
//     'count': numberOfFilms,
//     'movies': {},
//     'actors': {},
//     'genres': [],
//     'privat': true
// }


// for(let i = 0; i < 2; i++){
//     const lastFilm = prompt("Останный фыльм який ви дивились?", ''),
//           mark = prompt("Якою буде ваша оцінка цього фільму?", '');

//     if( lastFilm != null && mark != null && lastFilm != '' && mark != '' && lastFilm.length < 50){
//         personalMovieDB.movies[lastFilm] = mark;
//         console.log("done")
//     } else{
//         console.log('error')
//          i--;
//     }
// }

// console.log(personalMovieDB)

// if(personalMovieDB.count < 10){
//     console.log('Ви переглянули достатьо мало фільмів')
// }else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
//     console.log('Ви класичний глядач')
// }else{ 
//     console.log("Ви кіноман")
// }

// personalMovieDB.movies[lastFilm] = mark;
