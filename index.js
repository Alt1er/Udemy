"use steict"


const numberOfFilms = prompt('Скільки фільмів ви вж переглянули?', '');

    
const personalMovieDB = {
    'count': numberOfFilms,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': true
}


for(let i = 0; i < 2; i++){
    const lastFilm = prompt("Останный фыльм який ви дивились?", ''),
          mark = prompt("Якою буде ваша оцінка цього фільму?", '');

    if( lastFilm != null && mark != null && lastFilm != '' && mark != '' && lastFilm.length < 50){
        personalMovieDB.movies[lastFilm] = mark;
        console.log("done")
    } else{
        console.log('error')
         i--;
    }
}

console.log(personalMovieDB)

if(personalMovieDB.count < 10){
    console.log('Ви переглянули достатьо мало фільмів')
}else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
    console.log('Ви класичний глядач')
}else{ 
    console.log("Ви кіноман")
}

personalMovieDB.movies[lastFilm] = mark;
