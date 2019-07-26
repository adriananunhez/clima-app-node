const axios = require('axios');
//api.openweathermap.org/data/2.5/weather?lat=35&lon=139
//7f392f2a57f9a8a9424700654c12abc1
const getCLima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=7f392f2a57f9a8a9424700654c12abc1&units=metric`)
    return resp.data.main.temp;
}


module.exports = {
    getCLima
}