$(document).ready(function() {
  $.getJSON(url, getQuote);
  getColor(colors);


    $("#newQuote").on('click', function() {
      $.getJSON(url, getQuote);
      getColor(colors);
      console.log('hello');
    });
});


var url = "https://thesimpsonsquoteapi.glitch.me/quotes";

var colors = ['#2980b9', '#e74c3c', '#e67e22', '#27ae60', '#f1c40f', '#1abc9c', '#95a5a6', '#8e44ad', "#16a085", "#d35400", "#f39c12", "#3498db"];

var getQuote = function (data) {
  $("#text").text(" " + data.quote);
  
  if (data.character === '') {
    data.character = 'Unknown';
  }
  
  $("#author").text("- " + data.author);
  
var quot = 'https://twitter.com/intent/tweet?text=' + data.character + 'Character ' + data.quote +' @terrifictor codepen.io/terrifictor100';
  
  $(".twitter-share").attr("href", quot);
  
  
  
}

var getColor = function(){
    var randomColor = Math.floor(Math.random() * (colors.length));
    $("body").animate({"background-color": colors[randomColor], "color":colors[randomColor]}, 1000);

    $(".btn").animate({"border-color": colors[randomColor], "color":colors[randomColor]});

    $(".twitter-share").animate({ "color":colors[randomColor]}, 1000);

  
   }
 


