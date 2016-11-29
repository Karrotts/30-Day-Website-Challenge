$('#search').keypress(function (e) {
  if (e.which == 13) {
    findChannel($('#search').val());
  }
});

function findChannel(val) {
  $.ajax({
  url: "https://api.twitch.tv/kraken/channels/"+ val +"?response_type=code&client_id=61uhr3ljdh60resytxxsd6oy20xc2m2",
  jsonp: "callback",
  dataType: "jsonp",
  data: {format: "json"},
  success: function( r ) {
      if(r.status != "404") {
        $('#search-bar').css("display", "none");
        $('#profiles').css("display", "inline");
        setChannel(r);
      } else {
        $('#error').html("No Channel Was Found! Try Again!");
        $('#error').css("margin", "5px");
        $('#search').css("margin-top", "5px");
      }
    }
  });
}

function setChannel(val) {
  $('#username').html("<span id='online-marker'><i class='fa fa-circle fa-sm' aria-hidden='true'></i> </span>" + val.display_name);
  $('#title').html(val.status);
  $('#follower-count').html(numberCommas(val.followers));
  $('#view-count').html(numberCommas(val.views));
  $('#stream').attr("src", "http://player.twitch.tv/?channel="+val.display_name);
  if(val.logo != null) {$('#user-image').css("background-image", "url("+val.logo+")");}
  if(val.profile_banner != null) {$('#banner').css("background-image", "url("+val.profile_banner+")")}
    else if(val.profile_banner_background_color != null) {$('#banner').css("background-color", val.profile_banner_background_color)}
  checkOnline(val.display_name);
}

function checkOnline(val) {
  $.ajax({
    url: "https://api.twitch.tv/kraken/streams/"+ val +"?response_type=code&client_id=61uhr3ljdh60resytxxsd6oy20xc2m2",
    jsonp: "callback",
    dataType: "jsonp",
    data: {format: "json"},
    success: function( r ) {
      console.log(r);
      if(r.stream != null) {
        $('#online-marker').css("color", "#2ecc71");
      } else {
        $('#online-marker').css("color", "#e74c3c");
      }
    }
  })
}

function numberCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
