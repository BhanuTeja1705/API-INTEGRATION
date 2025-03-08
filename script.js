const apiKey = "247d4ce6aa5e4ed6783c194649dd14a8";  // Your OpenWeatherMap API key

async function getWeather() {
    const city = document.getElementById("city").value.trim();
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    // Fixing the URL string interpolation (use backticks `` instead of quotes)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            document.getElementById("weather-info").innerHTML = `<p>${data.message}</p>`;
            return;
        }

        // Display weather information
        document.getElementById("weather-info").innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("weather-info").innerHTML = `<p>Failed to fetch weather data. Please try again.</p>`;
    }
}
