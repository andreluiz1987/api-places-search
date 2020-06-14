const PlaceSearch = require("../services/google-place-service.js");

exports.getPlaces = async (req, res, next) => {
    try {
        var placeSearch = new PlaceSearch();
        console.log()
        var parameters = {
            location: [req.query.lat, req.query.lng],
            types: "restaurant"
        };
        placeSearch(parameters, function (error, response) {
            if (error) throw error;
            console.log(response);
            res.status(200).json(response);
        });
    } catch (e) {
        res.status(500).json({
            message: "Falha ao realizar request palces"
        });
    }
};