const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");

const app = express();
var items =["Buy Food","Cook Food","Eat Food"];
var workItems = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function (req, res) {

    var today = new Date();
    //var currentDay = today.getDay();
    //var day = "";
    // if(currentDay === 6 || currentDay=== 0){
    //     day ="Weekend";
    //     res.write("<h1>Yay it's the weekend!</h1>");
    // } else {
    //    // res.write("<h1>Yay it's the week</h1>");
    //    day ="Weekeday";
    //     //res.sendFile(__dirname+"/index.html");
    //    //res.send();
    // }

    ///Switch case////

    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    //     default:
    //         console.log("Error: current day is equal to: " + currentDay);
    //         break;
    // }
    var option={
        weekday :"long",
        day :"numeric",
        month:"long"
    };
    var day =today.toLocaleDateString("en-US",option);
    res.render("list", { kindOfDay: day, newListItems: items });
});
app.post("/", function(req,res){
    console.log(req.body);
 let item = req.body.newItem;
 if(req.body.list ==="Work List"){
    workItems.push(item);
    res.redirect("/work");
 } else{
     items.push(item);
     res.redirect("/");
 }
});

app.get("/work", function(req,res){
    res.render("list",{kindOfDay: "Work List" ,newListItems : workItems});
});
// app.post("/work", function(req,res){
//     console.log(req,body);
//     let item =req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work")
// });
app.get("/about", function(req,res){
    res.render("about");
});
app.listen(3000, function () {
    console.log("server started on port 3000");
});