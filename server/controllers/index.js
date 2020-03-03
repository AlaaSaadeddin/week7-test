const express = require("express");

const router = express.Router();
const { getCities } = require('../database/queries/getCities');
const { addCities } = require('../database/queries/addCity');

const getData = (req, res, next) => getCities().then((data) => {
    res.json(data.rows);
  }).catch((err) => {
    next(err);
  });

  const addData = (req, res, next) => addCities(req.body).then((data) => {
    res.json(data.rows[0]);
  }).catch((err) => {
    next(err);
  });

  router.get('/cities', getData);
  router.post('/add-city', addData);
module.exports = router;

