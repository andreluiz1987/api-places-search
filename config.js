const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    GOOGLE_PLACES_API_KEY: process.env.GOOGLE_PLACES_API_KEY,
    GOOGLE_PLACES_OUTPUT_FORMAT: process.env.GOOGLE_PLACES_OUTPUT_FORMAT,
};