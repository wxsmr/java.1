const http = require('http');
const fs = require("fs");
const url = require('url');
const crcc = require("./city_readCityCode.js");

http.createServer(function(req,resp){
    //中国天气编码json文件
    var codepath = "./city_weathercode_china.json";
    //第一次通过ip地址获取用户城市，第x次获取可以通过前端传递
    var cityName = "北京";
    //readCityCode(codepath,cityName,requestWeatherCom);
    var urlObj =url.parse(req.url,true);
    console.log(urlObj);
    resp.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    //设置主页的url
    if(req.url == "/weather"){
        fs.readFile("html/index.html",(err,data) =>{
            resp.end(data);
        });

    }else if(req.url == "/html/yun.gif"){
        fs.readFile("html/yun.gif",(err,data) =>{
            resp.end(data);
        });
    }else if(req.url == "/city_currentWeather.json"){
        console.log("==json==成功！");
        fs.readFile("city_currentWeather.json",(err,data) =>{
            console.log(data);
            resp.end(data);
        });
        //准备解析URL只要urlname 不要值
    }else if(urlObj.pathname == "/weather/select"){
        //readCityCode(codepath,urlObj.query.cityName,requestWeatherCom);
        //线程等待500-800毫秒更好
        resp.end("successful!");
        
    }
    else{
        resp.end("404!");
    }
}).listen(3000,function(err){console.log("服务器启动成功！");});