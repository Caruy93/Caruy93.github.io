// Create weather object that maps the json description to a simplified text and emoji
export const weatherObj = {

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
