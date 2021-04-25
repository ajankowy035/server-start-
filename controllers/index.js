const rootService = require('../services');

const rootController = (req,res)=>{
    const result = rootService();
    return res.json(result);
}

module.exports = rootController;