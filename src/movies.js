// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const alldirectors = moviesArray.map(movie => movie.director);
    return alldirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (!moviesArray.length) {
        return 0;
    }
    const spielbergMovies = moviesArray.filter(movie => {
        return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg';
    }); return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0;
    }
    const scores = moviesArray.map(movie => {
        return movie.score;
    });
    let averageScore = scores.reduce((acumulator, currentValue) => {
        if (!currentValue) {
            return acumulator;
        } else {
            return acumulator + currentValue;
        }
    }, 0);
    averageScore = averageScore / moviesArray.length;
    return Number(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(function (movie) {
        return movie.genre.includes("Drama");
    });
    const averageRate = scoresAverage(dramaMovies);
    return averageRate;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let moviesArrayCopy = moviesArray.slice();
    moviesArrayCopy.sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        } else if (b.year > a.year) {
            return -1;
        } else {
            if (a.title > b.title) {
                return 1;
            } else if (b.title > a.title) {
                return -1;
            }
        }
    });
    return moviesArrayCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMovies = moviesArray.slice().sort((a, b) => a.title.localeCompare(b.title));
    const movieTitles = sortedMovies.map(movie => movie.title);
    return movieTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
