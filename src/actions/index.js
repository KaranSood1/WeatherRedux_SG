import axios from 'axios';

const API_KEY ='de1984da48d52fbb8dc3fb59fdc3e6df';
const ROOT_URL =`http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER ='FETCH_WEATHER';

export function fetchWeather(city) {

    //Building the Complete Urls with locations
    const url = `${ROOT_URL}&q=${city},us`;

    //Axios GET request
    const request = axios.get(url);

        return {
            type : FETCH_WEATHER,
            payload : request
        };
}