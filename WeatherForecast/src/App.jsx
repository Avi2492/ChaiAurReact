// import "./App.css";
// import Card from "./Components/Card";

// function App() {
//   // let myObj = {
//   //   name: "John",
//   //   age: 30,
//   // };

//   // let newArr = [1, 2, 3];
//   return (
//     <>
//       <h1 className="bg-green-400 text-black p-4 rounded mb-5">
//         Tailwind Test
//       </h1>
//       <Card name="chaiaurcode" btnText="Click me" />
//       {/* <Card name="Avinash" btnText="Visit me" /> */}

//       {/* Let suppose some on no pass the value for btnText */}
//       <Card name="Avinash" />
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css"; // Import your custom styles here
import axios from "axios"; // Make sure to install axios: npm install axios

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c434f1d12c0a7b76fa520b421caaa209`
      );

      setWeather(response.data);
    } catch (error) {
      console.log("Error fetching weather data: ", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded p-4 w-80">
        <h2 className="text-xl font-bold mb-4 text-black">Weather Forecast</h2>
        <div className="flex flex-col items-center">
          <input
            type="text"
            className="border rounded-md p-2 mb-2 w-full"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className="bg-blue-500 text-black rounded-md py-2 px-4 hover:bg-blue-600"
            onClick={getWeather}
          >
            Get Weather
          </button>
        </div>
        {weather && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-black">
              Weather Details
            </h3>
            <p>{weather.weather[0].description}</p>
            <p className="text-black">
              <strong>Temperature:</strong> {weather.main.temp}&deg;C
            </p>
            <p className="text-black">
              <strong>Humidity:</strong> {weather.main.humidity}%
            </p>
            <p className="text-black">
              <strong>Wind Speed:</strong> {weather.wind.speed} m/s
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
