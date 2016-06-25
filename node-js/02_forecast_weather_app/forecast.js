var https = require("https"),
    http = require("http"),
    async = require("async"),
    zipConvert = require("./zip-convert"),
    messages = require("./messages");

var apiKey = require('./config').forecastApiKey,
    printForecastMessage = messages.printForecastMessage,
    printError = messages.printError;

function getForecast(location, callback) {
    if (!location) {
        return callback('No location specified', null);
    }
    var latitude = location.lat,
        longitude = location.lng;

    var url = "https://api.forecast.io/forecast/" + apiKey + "/" + latitude + "," + longitude;
    var req = https.get(url, function(res) {
        var body = "";
        res.on('data', function (dataStream) {
            body += dataStream;
        });

        res.on('end', function() {
            if(res.statusCode === 200) {
                try {
                    // Parse the data
                    var forecast = JSON.parse(body);
                    // Print the data
                    callback(null, forecast);
                } catch(error) {
                    printError(error);
                }
            } else {
                var code = res.statusCode;
                var msg = {
                    message: "[" + code + "] " + http.STATUS_CODES[code] + " - "
                        + "Something went wrong with the connection! There was an error getting data."
                }
                printError(msg);
            }
        });
    });
    req.on("error", printError);
}

var showForecast = function(error, forecast, location) {
    if (forecast){
        try {
            printForecastMessage(forecast, location);
            // return forecast;
        } catch(error) {
            printError(error);
        }
    } else {
        var errorMsg = "There was an error getting the weather info from the forecast.io server.\n"
                + "[ERROR]: " + error + "\n";
        var notifMsg = "It seems there is no data received";

        var msg = {
            message: error ? errorMsg : notifMsg
        }
        printError(msg);
    }
};

module.exports.getForecast = getForecast;
module.exports.showForecast = showForecast;
