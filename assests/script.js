// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// var now = moment();
// // $("today").text.dayjs().format(M/D/YY)
// $("#today").text(now.format("MMM Do, YYYY"))
// console.log(moment())

//when I click 'search'
//function that takes in a string(city)
$(document).ready(function() {
    //$('#button-addon2').on('click', function() {
        //save input to local storage
        //append history to appear under search bar
        //calls on text value of class text
        
   //function to get geocache api, from text input
   var fetchButton = document.getElementById('button-addon2');
   var currentWeather = document.getElementById('currentWeather')
   function getApi() { console.log("click")
       const cityText = $("#cityForm").val(); 
       var requestUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityText + "&appid=cbc02e46c2204d5b31b0aa9bbfa648e6";
       
       //var lat = response.json.stringify(data.lat)
       //var long = response.json.stringify(data.lon);
      //fetch city to geocache coordinates
       fetch(requestUrl)
        .then(response => response.json()) 
        .then(data => {
            localStorage.setItem("city", cityText);
            const lat = data[0].lat
            const long = data[0].lon
            console.log(data)    
        
                var currentCity = document.getElementById('currentCity');
                currentCity.textContent = data[0].name

                currentWeather.append(currentCity)
            
    var fiveDayForecast = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&appid=cbc02e46c2204d5b31b0aa9bbfa648e6"
            return fetch(fiveDayForecast)
        }).then(response => response.json()) 
        //})//parsed geocache to lat long var
        .then(function (data){
            console.log(data);
        
        })
 
  } 
  fetchButton.addEventListener('click', getApi);
            
                
         //fetch weather condition with parsed geocache
            //parse data
        //append data to unique classes
    
            
    
    //append the information to the page in unique classes

 }
 );


 $('#currentCity .text').val(localStorage.getItem("city"));
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city