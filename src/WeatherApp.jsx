import { useState } from "react";
import SearchPlace from './SearchBox';
import Infobox from './Infobox';

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState({
    city: "Delhi",
    country: "India",
    temp: 25,
    temp_min: 20,
    temp_max: 30,
    humidity: 60,
    pressure: 1017,
    weather: "Clear",
  });
  // Function to update data
  let newWeatherData = (newinfo) => { // This function will be passed as a prop to the SearchPlace component, and it will be called when the user submits a new city. The new weather data will be passed as an argument to this function, and we will update the state with the new data.
    setWeatherData(newinfo); // This will trigger a re-render of the component, and the new weather data will be displayed in the Infobox component. The Infobox component will receive the new weather data as a prop and will update its display accordingly.
  }

  return (
    <div className="WeatherApp">
      <div className="weather-shell">
        <p className="weather-kicker">Live Conditions</p>
        <h1>Weather Scope</h1>
        <p className="weather-subtitle">Track temperature, pressure, humidity and sky mood in one clean view.</p>
        <SearchPlace updateWeatherData={newWeatherData} />
        {/* <SearchPlace updateWeatherData={updateWeatherData} />
          Parent → Child communication
          Giving child the power to update parent state
          This is called : "lifting state up"
        */}
        <Infobox info={weatherData} />
        {/* // We are passing the weatherData state as a prop to the Infobox component, so that it can display the weather data in the UI. Whenever the weatherData state is updated (when the user submits a new city), the Infobox component will re-render and display the new weather data. */}
      </div>
    </div>
  );
}