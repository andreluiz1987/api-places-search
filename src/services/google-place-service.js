(function () {
    "use strict";

    const { GOOGLE_PLACES_API_KEY, GOOGLE_PLACES_OUTPUT_FORMAT } = require('../../config');

    const querystring = require("querystring");
    const https = require("https");

    const HttpResponseProcessor = require("./http-response-processor.js");

    module.exports = function () {
        return function (parameters, callback) {
            parameters.key = GOOGLE_PLACES_API_KEY;
            parameters.location = parameters.location || "-33.8670522,151.1957362";
            parameters.pagetoken = parameters.pagetoken || '';
            parameters._ = (new Date()).getTime().toString(36);

            if (typeof parameters.location === "object") parameters.location = parameters.location.toString();

            if (!parameters.rankby) parameters.radius = parameters.radius || 500;
            parameters.sensor = parameters.sensor || false;

            const options = {
                hostname: "maps.googleapis.com",
                path: "/maps/api/place/search/" + GOOGLE_PLACES_OUTPUT_FORMAT + "?" + querystring.stringify(parameters)
            };
            const request = https.request(options, new HttpResponseProcessor(GOOGLE_PLACES_OUTPUT_FORMAT === "json", callback));
            request.on("error", function (error) {
                callback(new Error(error));
            });
            request.end();
        };
    };

})();