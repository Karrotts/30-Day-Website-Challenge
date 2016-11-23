$(document).ready(function(){
//Globals
  var cords,city,currentTemp,weatherDesc,city,country,Temp;
  var mode = "F";
//Get user position
  $.ajax({
      url: "http://ipinfo.io/json",
      jsonp: "callback",
      dataType: "jsonp",
      data: {format: "json"},
      success: function( response ) {
       cords = response.loc.split(",");
       city = response.city;
       country = response.country;
       getWeather()
      }
  });

//Use position to get current weather
  function getWeather() {
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?lat=" + cords[0] + "&lon=" + cords[1] + "&APPID=db792a77acd02c7ba0530ac084e04e9a",
        jsonp: "callback",
        dataType: "jsonp",
        data: {format: "json"},
        success: function( response ) {

         currentTemp = response.main.temp;
         weatherDesc = response.weather[0].main;
         $("#weatherdesc").html(weatherDesc);
         $("#place").html(city + ", " + country);

            switch(response.weather[0].description){
              case "clear sky": $("#img").attr("class","wi wi-day-sunny"); break;
              case "few clouds": $("#img").attr("class","wi wi-day-cloudy"); break;
              case "scattered clouds": $("#img").attr("class","wi wi-cloud"); break;
              case "broken clouds": $("#img").attr("class","wi wi-cloudy");break;
              case "shower rain": $("#img").attr("class","wi wi-rain");break;
              case "rain":$("#img").attr("class","wi wi-day-rain-wind");break;
              case "thunderstorm":$("#img").attr("class","wi wi-thunderstorm");break;
              case "snow":$("#img").attr("class","wi wi-snow");break;
              case "mist":$("#img").attr("class","wi wi-fog");break;
              default: $("#img").attr("class","wi wi-cloud");break;
            }

          calculateWeather();

        }
    });
  }

//calculate current weather based off the current degree mode
  function calculateWeather() {
    switch(mode){
      case "F":
        Temp = Math.floor(currentTemp * (9/5) - 459.67);
        $("#temperature").html(Temp + "");
        $("#mode").html(" F");
        break;
      case "C":
        Temp = Math.floor(currentTemp - 273.15);
        $("#temperature").html(Temp + "");
        $("#mode").html(" C");
    }
  }

//change degree mode
  $("#mode").click(function() {
    switch(mode){
      case "F": mode = "C"; break;
      case "C": mode = "F"; break;
    }
    calculateWeather();
  });


});
