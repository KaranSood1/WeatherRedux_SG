import axios from 'axios';

const API_KEY ='de1984da48d52fbb8dc3fb59fdc3e6df';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER ='FETCH_WEATHER';

export function fetchWeather(city) {

    //Building the Complete Urls with locations
    const url = `${ROOT_URL}&q=${city},us`;
    //Axios GET request
    const request = axios.get(url);

    //'request' response from the axios is the promise, before Redux-Promise works on it  //console.log('Request : ' , request);
        return {
            type : FETCH_WEATHER,
            payload : request
        };
}