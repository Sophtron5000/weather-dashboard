// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
var now = moment();
// $("today").text.dayjs().format(M/D/YY)
$("#today").text(now.format("MMM Do, YYYY"))
console.log(moment())

//when I click 'search'
$(document).ready(function() {
    $('#button-addon2').on('click', function() {
        const cityText = $(this).attr('.form-control').val(); //calls on text value of class text
        localStorage.setItem(cityText);
        //var blockTime = $(this).parent().attr('id'); 
    })
    //function that takes in a string(city)
    //function citySearch(str) {
            //fetch city to geocache coordinates

        //fetch weather condition with geocache

            //save the search to local storage
            //append history to appear under search bar
    
    //append the information to the page in unique classes


// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city