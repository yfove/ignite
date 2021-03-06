// Base URL
const base_url ='https://api.rawg.io/api';

// Getting the date
const getCurrentDay = () => {
    const day = new Date().getDate();
    console.log(day);
    if(month < 10){
        return `0${day}`;
    } else {
        return day;
    }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// console.log(currentDate);

// Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=20`;

export const popularGamesURL = () => `${base_url}${popular_games}`

console.log(popularGamesURL());



