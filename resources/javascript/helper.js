// Convert open weather json information for html rendering
const createWeatherHTML = (currentDay) => {

    let tempDescription;
    let mainCondition;

    if (currentDay.main.temp < 18) {
        tempDescription = 'cold';
    } else {
        tempDescription = 'warm';
    }

    switch(currentDay.weather[0].description) {
        case 'clear sky':
            mainCondition = 'sunny';
            break;
        case 'few clouds':
            mainCondition = 'cloudy';
            break;
        case 'scattered clouds':
            mainCondition = 'cloudy';
            break;
        case 'broken clouds':
            mainCondition = 'cloudy';
            break;
        case 'shower rain':
            mainCondition = 'rainy';
            break;
        case 'rain':
            mainCondition = 'rainy';
            break;
        case 'thunderstorm':
            mainCondition = 'stormy';
            break;
        case 'snow':
            mainCondition = 'snowy';
            break;
        case 'mist':
            mainCondition = 'misty';
            break;
        default:
            mainCondition = 'unknown';
    }

    return tempDescription + ' and ' +  mainCondition;
    
}
