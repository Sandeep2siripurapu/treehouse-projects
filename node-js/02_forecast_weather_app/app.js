var async = require('async'),
    country = process.argv.slice(2, 3)[0],
    zipcodes = process.argv.slice(3),

    getLocation = require('./zip-convert').getLocation,
    showLocation = require('./zip-convert').showLocation,
    getForecast = require('./forecast').getForecast,
    showForecast = require('./forecast').showForecast,
    printError = require('./messages').printError
    getCountryCode = require('./functions').getCountryCode;

function iterator(zipcode, next) {
    getLocation(zipcode, countryCode, function (error, location) {
        showLocation(error, location);
        // console.dir(location);

        getForecast(location, function (error, forecast) {
            showForecast(error, forecast, location);

            // Return the whole forecast.io JSON object
            // console.dir(forecast);
            next(null, forecast);
        });
    });
};

function allDone(err) {
    if (err) printError(err);
    console.log('=======================================');
    console.log('And those are your forecasts for today!');
}

var countryCode = getCountryCode(country);

if (countryCode) {
    // Loop over each zipcode, one after another.
    async.eachSeries(zipcodes, iterator, allDone);
} else {
    console.error('Select other country. Imposible to get country code for ' + country);
}
