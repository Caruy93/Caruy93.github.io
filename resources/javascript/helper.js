// Convert open weather json information for html rendering
const createWeatherHTML = (currentDay) => {
    console.log(currentDay);
    return `<p>${currentDay.weather[0].main}</p>`
}
