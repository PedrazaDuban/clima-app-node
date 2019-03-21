const axios = require('axios');



const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=77a13dc0805f0e9dcd449e84aa9953d8&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}