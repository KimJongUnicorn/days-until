function getDays(x) {
  return parseInt((x-apples)/toDays);
}

var toDays = (24*3600*1000);
var apples = new Date();
var oranges = new Date(2021,12,25);
var bananas = new Date(2022,01,01);
var peaches = new Date(2022,02,14)
var pears = getDays(oranges);
var kiwis = getDays(bananas);
var limes = getDays(peaches);
var ripePears = pears.toString();
var ripeKiwis = kiwis.toString();
var ripeLimes = limes.toString();

$("#trigger").click(function(){ 
  $("#days-until").append("<li>" + ripePears+" days until Christmas</li>");
})

$("#trigger").click(function(){
  $("#days-until").append("<li>" + ripeKiwis+" days until New Year</li>");
})

$("#trigger").click(function(){
  $("#days-until").append("<li>" + ripeLimes+" days until Valentines Day</li>");
})