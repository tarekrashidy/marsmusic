import {createApi,}
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1173d9b56cmsh4c4123460fb5e60p1904f1jsn53cdcf5e9de0',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
};

fetch('https://shazam.p.rapidapi.com/charts/track', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    export const shazamCoreApi= 