var getWindDirection = require('./functions').getWindDirection,
    changeToPercent = require('./functions').changeToPercent,
    hPAtoinHGConversion = require('./functions').hPAtoinHGConversion,
    getCountryName = require('./functions').getCountryName,
    convertFToC = require('./functions').convertFahrenheitToCelcium,
    convertMphToKph = require('./functions').convertMphToKph
    convertHpaToMmhg = require('./functions').convertHpaToMmhg;

function printLocationInfo(zipCode, city, state, countryCode, long, lat) {
    var zipMessage = "The city for the zip code "+ zipCode + " is:\n"
        + city + ", "
        + state + ", "
        + getCountryName(countryCode) + "\n"
        + "Longitude: " + long + ", Latitude: " +  lat + ".\n";
    console.log(zipMessage);
}

// Prints out the final weather forecast message
function printForecastMessage(forecast, location) {
    var weather = forecast.currently,
        degC = '\u2103',
        percent = '\uFF05';

    var forecastMsg = "The current weather forecast for "
        + location.placeName + ", "
        + location.adminName1 + ", "
        + getCountryName(location.countryCode) + ", is: \n"
        + weather.summary /*+ " " + weather.icon*/ + "\n"
        + "Temperature: " + convertFToC(weather.temperature).toFixed(2) + degC + "\n"
        + "Feels like: " + convertFToC(weather.apparentTemperature).toFixed(2) + degC + "\n"
        + "Wind speed: " + convertMphToKph(weather.windSpeed).toFixed(2) + " km/H out "
            + "of the " + getWindDirection(weather.windBearing) + "\n"
        + "Precipitation of: " + weather.precipIntensity + "\n"
        + "Humidity of: " + changeToPercent(weather.humidity) + percent + "\n"
        + "Barometric pressure of: " + convertHpaToMmhg(weather.pressure).toFixed(2) + " mmHg\n"
        + "Visibility of: " + weather.visibility + ".\n";

    console.log(forecastMsg);

    /*
    if (forecast.alerts) {
        var fAlert = forecast.alerts[0];

        alertMsg = "There is also a Special Weather Alert Message for this region:\n"
            + fAlert.title + ": \n\n"
            + fAlert.description + "\n"
            + "More information can be found at this web address: " + fAlert.uri + ".\n";

        console.log('---------------------------- ALERTS ------------------------------');
        console.log(alertMsg);
        console.log('------------------------------------------------------------------');
    }
    */
}

// Prints out error messages
function printError(error) {
    console.error(error.message);
}

module.exports.printLocationInfo = printLocationInfo;
module.exports.printForecastMessage = printForecastMessage;
module.exports.printError = printError;
