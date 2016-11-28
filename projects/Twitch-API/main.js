channels = ["CarlSagan42","Cryaotic","SilverName","Sodapoppin","FreeCodeCamp"];

channels.forEach(function(x) {
  getStatus(x);
  getIcon(x);
  $("#profiles").append(
    '<div id="streamer"><table><tr><td><div id="streamer-icon" class="'+x.toLowerCase()+'"></div></td><td><h2 id="streamer-name">'+ x +'</h2></td><td><h2 id="status" class='+x.toLowerCase()+'status'+'></h2></td></tr></table><hr></div>'
  )
});

function getStatus(name) {
    $.ajax({
      url: "https://api.twitch.tv/kraken/streams/"+ name +"?response_type=code&client_id=61uhr3ljdh60resytxxsd6oy20xc2m2",
      jsonp: "callback",
      dataType: "jsonp",
      data: {format: "json"},
      success: function( r ) {setStatus(r)}
  })
}

function getIcon(name) {
      $.ajax({
      url: "https://api.twitch.tv/kraken/channels/"+ name +"?response_type=code&client_id=61uhr3ljdh60resytxxsd6oy20xc2m2",
      jsonp: "callback",
      dataType: "jsonp",
      data: {format: "json"},
      success: function( r ) {setIcon(r)}
  })
}

function setIcon(val) {
  if(val.status != 404){
    var name ="." + val.display_name;
    name = name.toLowerCase();
    $(name).css("background-image", "url('"+val.logo+"')")
  } else {
    var name = (/'(.*?)'/g).exec(val.message);
    name = "." + name[1].toLowerCase();
    $(name).css("background-image","url('http://eadb.org/wp-content/uploads/2015/08/profile-placeholder.jpg')");
  }
}

function setStatus(val) {
  console.log(val);
  if(val.status != 404){
    var patt = new RegExp(/([A-Z])\w+/g);
    var res = patt.exec(val._links.self);
    var name = "." + res[0] + "status";
    name = name.toLowerCase();
    if(val.stream) {
      $(name).html("Online").css("color", "green");
    } else {
      $(name).html("Offline");
    }
  } else {
    var name = (/'(.*?)'/g).exec(val.message);
    name = "." + name[1].toLowerCase() + "status";
    $(name).html("Channel does not exist.");
  }
}
