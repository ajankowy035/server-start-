const rootRepository = require('../repositories');

const rootService = () => {
    const result = rootRepository();
    return result;
}

module.exports = rootService;