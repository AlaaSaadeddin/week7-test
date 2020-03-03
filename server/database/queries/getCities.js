const dbConection = require('../config/connection');
const getCities = () => dbConection.query('SELECT * FROM cities');

module.exports = { getCities };
