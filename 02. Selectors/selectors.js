console.log("hello selectors.js")


// 01 all element selector *

// $(document).ready(function(){
//   $("*").css("background", "yellow");
// });

// 02 all #id selector

// $(document).ready(function(){
//   $("#intro").css("background", "pink");
// });

// 03 all .class selector

// $(document).ready(function(){
//   $(".intro").css("background", "blue");
// });


// 04 all :first selector

// $(document).ready(function(){
//   $("p:first").css("background", "red");
// });

// 05 all :last selector

// $(document).ready(function(){
//   $("p:last").css("background", "red");
// });

// 06 all :event selector

$(document).ready(function(){
  $("p:even").css("background", "pink");
});