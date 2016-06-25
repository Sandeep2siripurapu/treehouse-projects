# FORECAST SHOW

Get weather forecast from longitude and latitude using [https://api.forecast.io](https://api.forecast.io)

### REQUEST

    https://api.forecast.io/forecast/[APIKEY]/[LATITUDE],[LONGITUDE],[TIME]


### RESPONSE

```json
{
   "latitude":45.514207,
   "longitude":-122.636397,
   "timezone":"America/Los_Angeles",
   "offset":-7,
   "currently":{
      "time":1466892126,
      "summary":"Clear",
      "icon":"clear-day",
      "nearestStormDistance":21,
      "nearestStormBearing":85,
      "precipIntensity":0,
      "precipProbability":0,
      "temperature":75.5,
      "apparentTemperature":75.5,
      "dewPoint":53.75,
      "humidity":0.47,
      "windSpeed":5.66,
      "windBearing":345,
      "visibility":10,
      "cloudCover":0.06,
      "pressure":1020.4,
      "ozone":327.99
   },
   "minutely":{
      "summary":"Clear for the hour.",
      "icon":"clear-day",
      "data":[
         {
            "time":1466892120,
            "precipIntensity":0,
            "precipProbability":0
         },
         {
            "time":1466892180,
            "precipIntensity":0,
            "precipProbability":0
         },
         . . .
      ]
   },
   "hourly":{
      "summary":"Clear throughout the day.",
      "icon":"clear-day",
      "data":[
         {
            "time":1466892000,
            "summary":"Clear",
            "icon":"clear-day",
            "precipIntensity":0,
            "precipProbability":0,
            "temperature":75.46,
            "apparentTemperature":75.46,
            "dewPoint":53.82,
            "humidity":0.47,
            "windSpeed":5.61,
            "windBearing":345,
            "visibility":10,
            "cloudCover":0.06,
            "pressure":1020.41,
            "ozone":328.01
         },
         . . .
      ]
   },
   "daily":{
      "summary":"No precipitation throughout the week, with temperatures rising to 92°F tomorrow.",
      "icon":"clear-day",
      "data":[
         {
            "time":1466838000,
            "summary":"Clear throughout the day.",
            "icon":"clear-day",
            "sunriseTime":1466857460,
            "sunsetTime":1466913883,
            "moonPhase":0.68,
            "precipIntensity":0,
            "precipIntensityMax":0,
            "precipProbability":0,
            "temperatureMin":50.31,
            "temperatureMinTime":1466856000,
            "temperatureMax":77.77,
            "temperatureMaxTime":1466899200,
            "apparentTemperatureMin":50.31,
            "apparentTemperatureMinTime":1466856000,
            "apparentTemperatureMax":77.77,
            "apparentTemperatureMaxTime":1466899200,
            "dewPoint":52.01,
            "humidity":0.69,
            "windSpeed":4.2,
            "windBearing":352,
            "visibility":9.39,
            "cloudCover":0.11,
            "pressure":1022.62,
            "ozone":325.71
         },
         . . .
      ]
   },
   "flags":{
      "sources":[
         "darksky",
         "lamp",
         "gfs",
         "cmc",
         "nam",
         "rap",
         "rtma",
         "sref",
         "fnmoc",
         "isd",
         "nwspa",
         "madis",
         "nearest-precip"
      ],
      "darksky-stations":[
         "KRTX"
      ],
      "lamp-stations":[
         "KHIO",
         "KMMV",
         "KPDX",
         "KSPB",
         "KTTD",
         "KUAO",
         "KVUO"
      ],
      "isd-stations":[
         "726980-24229",
         "727918-94298",
         "727918-99999",
         "999999-24229",
         "999999-24274"
      ],
      "madis-stations":[
         "C7021",
         "D3557",
         "D3762",
         "D4360",
         "D7321",
         "E1617",
         "E1914",
         "E2024",
         "E2298",
         "E6890",
         "E7517",
         "ODE07",
         "ODE10",
         "ODT10",
         "ODT12",
         "ODT14"
      ],
      "units":"us"
   }
}
```
