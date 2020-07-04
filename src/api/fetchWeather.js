import axios from 'axios';
// to get the api for the app weather 
const URL = 'http://api.openweathermap.org/data/2.5/weather';
// the api key of the weather
const API_key = 'c71bbfa78ba624a93c200b0b1f8d8841';
// the const of the fetchinging the data in the query 
export const fetchWeather = async (query) => {
    // to get the data in the URL
    const { data } = await axios.get(URL, {
        // to get the objects of the database
        params: {
            q: query,
            units: 'metric',
            APPID: API_key,
        }
    });

    return data;
}

export default fetchWeather

