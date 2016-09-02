var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&units=metric&appid=5f43647a30da30115a177a79292b50ba';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      // debugger;
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
        // console.log(res);
      }
    },function (res) {
      throw new Error(res.data.messge);
    });
  }
};

// Test
// const obj = {
//   getTemp: function (location) {
//     // var encodedLocation = encodedURIComponent(location);
//     var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=location`;
//
//     axios.get(requestUrl).then(function (res) {
//       if(res.data.cod && res.data.message) {
//         throw new Error(res.data.message);
//       } else {
//         console.log(res);
//         return res.data.main.temp;
//       }
//     },function (res) {
//       throw new Error(res.data.messge);
//     });
//   }
// };
//
// console.log(obj);
//
// obj.getTemp('Irvine');
