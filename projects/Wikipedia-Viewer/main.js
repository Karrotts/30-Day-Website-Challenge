$('#search').keypress(function (e) {
  if (e.which == 13) {
    console.log($("#search").val());
    $("#results").html("");
    getSearch($("#search").val());
  }
});

function getSearch(s) {
  $.ajax({
      url: "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ s +"&limit=10&namespace=0&format=json",
      jsonp: "callback",
      dataType: "jsonp",
      data: {format: "json"},
      success: function( r ) {
        for(var i = 0; i < r[1].length; i++) {
          $("#results").append("<a href='"+ r[3][i] +"'><div class='block'>" + "<h2>" + r[1][i] + "</h2>" + "<p>" + r[2][i] + "</p>"+ "</div></a>");
        }
      }
  });
}
