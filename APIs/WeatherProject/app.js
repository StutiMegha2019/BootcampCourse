const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html")
});

app.post("/",function(req,res){

    const query =req.body.cityName;
    const apiKey = "580003061f6f792ffe3808bef9703a6f";
    const unit = "metric";
    const url ="https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey + "&units=" + unit;
    //const url ="https://api.openweathermap.org/data/2.5/weather?q=dehradun&appid=580003061f6f792ffe3808bef9703a6f&units=metric"
    https.get(url,function(response){
        console.log(response.statusCode); // status code

        response.on("data",function(data){
        // console.log(data);   // it convert data into hexadecimal 

            const weatherData = JSON.parse(data)
           // console.log(weatherData); // paticular weather data
            const temp =weatherData.main.temp
          // console.log(temp);// provide only temp data 

            const weatherDescription =weatherData.weather[0].description
           // console.log(weatherDescription); //provide weather description
            const icon = weatherData.weather[0].icon
            const imageURL = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"
            const object ={
                name:"Stuti",
                course:"Bootcamp",
            }
            console.log(JSON.stringify(object)); // string
            res.write("<p> The weather is currently " + weatherDescription +"<p>");
            res.write("<h1> The temperature in "+ query + " is " + temp +" degree Celcius.</h1>");
            res.write("<img src=" + imageURL + ">");
            res.send()
        })
    })
})

app.listen(3000,function(){
    console.log("server is running on port 3000.");
});