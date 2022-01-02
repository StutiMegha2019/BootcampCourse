// $("h1").addClass("big-title margin-50");
//$("h1").text("bye");
//$("button").text("Don't click me "); 
$("button").html("<em>Don't click me</em>");

/////Attribue /////
$("img").attr("src");
//console.log($("img").attr("src"));
$("a").attr("href","https://www.yahoo.com");


///////Query Selector////////

//JS
for(var i=0;i<5;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        document.querySelector("h1").style.color="purple";
    });
}
//jQuery
$("button").click(function(){
    $("h1").css("color","purple");
});
$("h1").click(function(){
    $("h1").css("color","purple");
});

////keypress EventListeners////

// $("input").keypress(function(event){
// console.log(event.key);
// });

$(document).keypress(function(event){
    $("h1").text(event.key);
});

////MouseOver Function//// 
// $("h1").mouseover(function(){
//     $("h1").css("background-color", "purple");
//   });
  $("h1").on("click" ,function(){
    $("h1").css("color", "green");
  });

  ////Hide Method //// 
//   $("h1").on("click" ,function(){
//     $("h1").hide();
//   });
//   $("button").on("click" ,function(){
//     $("h1").fadeToggle();
//   });
 
//    $("button").on("click" ,function(){ 
//     $("h1").animate({margin : "20"}); 
//    }); 
//    $( "button" ).click(function() {
//     $( "h1" ).animate( {opacity : 0.5 });
//   });

  $("button").on("click" ,function(){ 
    $("h1").slideUp().slideDown().animate({margin : "20", opacity : 0.5}); 
   }); 