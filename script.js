let weather = {
    "apiKey" : "0b88cb8026997e0b1c0fb9ddd29e149e",
    fetchWeather : function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid="+ this.apiKey +"&units=metric",)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name } = data;    // const { name } : its ES6 Destructuring ... giving us the value of data.name & storing it in the constant name.
        const { icon, description } = data.weather[0];
        const { temp,humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".icon").src = "https:openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".windspeed").innerText = "Wind Speed : " + speed + " km/hr";
    },
    search : function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search-icon").addEventListener("click", function() {weather.search()});
document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if( event.key == "Enter" ){
        weather.search()
    }
});

weather.fetchWeather("kharagpur");