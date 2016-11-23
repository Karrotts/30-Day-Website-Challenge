var quotes = ["Don't cry because it's over, smile because it happened.","Be yourself; everyone else is already taken.","Now warm in love, now with'ring in my bloom Lost in a convent's solitary gloom!","The meaning of good and bad, of better and worse, is simply helping or hurting.","After the verb 'to love', the verb 'to help' is the most beautiful verb in the world."];
var authors = ["Dr. Seuss","Oscar Wilde","Percy Bysshe Shelley","Ralph Waldo Emerson","Bertha von Suttner"]

$(document).ready(function() {
  i = Math.floor(Math.random() * quotes.length);
  $(".quote").html(quotes[i] + " - <i>" + authors[i] + "</i>")
    $("#generatequote").on("click", function (){
      i = Math.floor(Math.random() * quotes.length);
      $(".quote").html(quotes[i] + " - <i>" + authors[i] + "</i>")
    });
    $("#tweetquote").on("click", function (){
      window.open('https://twitter.com/intent/tweet?text=' + quotes[i] + " - " + authors[i], "_blank");
    });
});
