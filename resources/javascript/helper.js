// Create weather object that maps the json description to a simplified text and emoji
const weatherObj = {

    'Clear': {
        'clear sky' : {
            text: 'sunny', emoji: [[0x2600, 0xFE0F], 0x1F60E]},
    },
    'Clouds': {
        'few clouds' : {
            text: 'cloudy', emoji: [0x1F324, 0xFE0F]},
        'scattered clouds' : {
            text: 'cloudy', emoji: [0x26C5]},
        'broken clouds': {
            text: 'cloudy', emoji: [0x2601, 0xFE0F]},
        'overcast clouds': {
            text: 'cloudy', emoji: [0x2601, 0xFE0F]},
    },
    'Rain' : {
        'light rain': {
            text: 'rainy', emoji: [0x1F326, 0xFE0F]},
        'moderate rain': {
            text: 'rainy', emoji: [0x1F326, 0xFE0F]},
        'shower rain': {
            text: 'rainy', emoji: [0x1F327, 0xFE0F]},
        'rain': {
            text: 'rainy', emoji: [0x1F326, 0xFE0F]},
        'thunderstorm': {
            text: 'stormy', emoji: [0x26C8, 0xFE0F]},
    },
    
    'snow': {
        text: 'snowy', emoji: [0x2603, 0xFE0F]},
    'mist': {
        text: 'misty', emoji: [0x1F32B, 0xFE0F]}
}

const tempToText = (currentDay) => {
    return currentDay.main.temp < 289.15 ? 'cold' : 'warm';
}

const simpleWeather = (currWeather) => {
    const main = currWeather.main;
    const description = currWeather.description;
    return weatherObj[main][description].text;

}

// Convert open weather json information for html rendering
const createWeatherHTML = (currentDay) => {
    
    const tempHTML = tempToText(currentDay);

    const conditionHTML = simpleWeather(currentDay.weather[0]);
    return tempHTML + ' and ' +  conditionHTML;
    
}

// Access emoji using weather object
const createWeatherEmoji = (currentDay) => {

    const weatherMain = currentDay.weather[0].main;
    const weatherDescription = currentDay.weather[0].description;
    const currWeatherObj = weatherObj[weatherMain][weatherDescription];

    // Clear sky weather and warm shows "sunglass emoji" instead of sun (shown when cold)
    if (weatherDescription === 'clear sky') {
        return tempToText(currentDay) === 'cold' ? 
            String.fromCodePoint.apply(null,currWeatherObj.emoji[0]) :
            String.fromCodePoint(currWeatherObj.emoji[1]) ;
    }
    else {
        return currWeatherObj.emoji.length === 2 ?
            String.fromCodePoint.apply(null, currWeatherObj.emoji) :
            String.fromCodePoint(currWeatherObj.emoji[0]);
    }

}
