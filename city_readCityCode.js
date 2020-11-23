const fs = require('fs');
const request = require('request');

//读取城市天气编码文件
readCityCode = function readCityCode(codepath,cityName,callback){
    fs.readFile(codepath,function(err,data){
       var obj =  JSON.parse(data);
       console.log(obj[cityName]);
       callback(obj[cityName]);
    })
}

//发送编码获取天气信息
requestWeatherCom = function requestWeatherCom(cityCode,callback){
    //"http://www.weather.com.cn/data/cityinfo/" + cityid + ".html"  返回json格式的天气信息
    weatherSRC = "http://www.weather.com.cn/data/cityinfo/" +cityCode+".html";
    request(weatherSRC,(err,data,callback) =>{
        if(err) throw err;
        saveCurrentWeather(data.body);
        callback;
    })
}

//存入当前查询后的天气信息

saveCurrentWeather = function saveCurrentWeather(body){
    fs.writeFile("city_currentWeather.json",body,"utf-8",(err)=>{
        console.log("save successful!");
    });
}
//测试


module.exports = readCityCode;
module.exports = requestWeatherCom;
module.exports = saveCurrentWeather;

//ctrl + F5 启动
