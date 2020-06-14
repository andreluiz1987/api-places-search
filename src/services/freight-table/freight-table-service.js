const typeCargo = require('./type-cargo-enum')
const GeneralCargo = require('./cargos/general-cargo')

exports.getRate = async (req, res, next) => {
    var axis = req.query.axis;
    var distance = req.query.distance;
    var type = req.query.type_cargo;
    var costkmAxis = 0;

    if (typeCargo.GENERAL_CARGO == type) {
        costkmAxis = new GeneralCargo().getCostByDistance(distance);
    }
    
    var result = axis * costkmAxis * distance;
    
    res.status(200).json(result);
};