const dbConection = require('../config/connection');
const addCities = (userCity) => {
    const sql = {
        text : 'INSERT INTO cities (name , city) VALUES ($1 , $2)' ,
        values: [userCity.name, userCity.city]
    };
    return dbConection.query(sql);
};
module.exports = { addCities };