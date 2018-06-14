export default function fetchWeather(lat, lon) {
    lat = parseFloat(lat);
    lon = parseFloat(lon);
    let url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&APPID={APIKEY}' ;
    return fetch(url).then((response) => response.json())
        .then((responseJson) => {
            return responseJson;//console.log(responseJson)
        })
        .catch((error) => {
            console.log("Error with fetchWeather function");
        });
}
fetchWeather()
