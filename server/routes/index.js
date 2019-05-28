const express = require('express');
const axios = require('axios');
const router = express.Router();

const apikey = 'dd0f92a1478d0422be501f72621fd8bd';

const getDate = (date) => {
    let reverseDate = date.match("[0-9]{4}[-][0-9]{2}[-][0-9]{2}");
    let temp = reverseDate[0].split("-").reverse();
    let finalDate = temp.join("-");

    return finalDate;
}

router.get('/getWeatherData', (req, res) => {
    let city = req.headers['city'];
    axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}
        &apikey=${apikey}&units=metric`
    )
    .then((response) => {
        let allData = response.data;
        let finalDataList = [];
        let refDate = getDate(allData.list[0].dt_txt);
        let refTemp = allData.list[0].main.temp;
        let refWindSpeed = allData.list[0].wind.speed;
        allData.list.forEach(element => {
            let currentDate = getDate(element.dt_txt);
            if(currentDate === refDate) {
                refTemp = (refTemp+element.main.temp)/2;
                refWindSpeed = (refWindSpeed+element.wind.speed)/2;
            }
            else {
                let tempObj = {
                    description: element.weather[0].description,
                    city: city,
                    date: refDate,
                    temp: refTemp,
                    wind: refWindSpeed,
                    main: element.weather[0].main
                };
                finalDataList.push(tempObj);
                refDate = getDate(element.dt_txt);
                refTemp = element.main.temp;
                refWindSpeed = element.wind.speed;
            }
            tempObj = {
                description: element.weather[0].description,
                city: city,
                date: refDate,
                temp: refTemp,
                wind: refWindSpeed,
                main: element.weather[0].main
            };
        });
        res.status(200).json(finalDataList);
    })
    .catch((err) => {
        res.sendStatus(err.response.status);
    })
})

module.exports = router;