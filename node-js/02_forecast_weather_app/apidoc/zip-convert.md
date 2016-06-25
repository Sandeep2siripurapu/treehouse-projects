# ZIP CONVERT SHOW

Get longitude and latitude from zip code using [http://api.geonames.org](http://api.geonames.org)

### REQUEST

    GET http://api.geonames.org/postalCodeLookupJSON?postalcode=[ZIPCODE]&country=[COUNTRYCODE]&username=[USERNAME]


### RESPONSE

```json
{
    "postalcodes": [
        {
            "adminName2":"Multnomah County",
            "adminCode2":"051",
            "postalcode":"97214",
            "adminCode1":"OR",
            "countryCode":"US",
            "lng":-122.636397,
            "placeName":"Portland",
            "lat":45.514207,
            "adminName1":"Oregon"
        }
    ]
}
```
