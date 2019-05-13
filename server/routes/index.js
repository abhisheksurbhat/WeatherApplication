const express = require('express');
const axios = require('axios');
const router = express.Router();

const apikey = 'dd0f92a1478d0422be501f72621fd8bd';

router.get('/getWeatherData', (req, res) => {
    let city = req.headers['city'];
    axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}
        &apikey=${apikey}&units=metric`
    )
    .then((response) => {
        res.status(200).json(response.data);
    })
    .catch((err) => {
        console.log(err);
        res.statusCode(500);
    })
})

module.exports = router;