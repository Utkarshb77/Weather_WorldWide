# 🌍 Weather WorldWide - React Weather App

A clean and responsive weather app built with React and Vite.

This project lets you search any city and view live weather details such as current temperature, min and max temperature, humidity, pressure, and weather condition.

---

## 🚀 Live Demo

👉 https://weatherworldwide.vercel.app/

---

## ✨ Highlights

* Search weather by city name
* Real-time weather data from OpenWeatherMap
* Responsive layout for desktop and mobile
* Refreshed modern UI with gradient background and glass-style container
* Built with React components and simple state flow

---

## 🛠 Tech Stack

* React
* Vite
* Material UI
* OpenWeatherMap API

---

## 📂 Project Structure

* [src/main.jsx](src/main.jsx): App entry point
* [src/App.jsx](src/App.jsx): Root app wrapper
* [src/WeatherApp.jsx](src/WeatherApp.jsx): Parent weather container and lifted state
* [src/SearchBox.jsx](src/SearchBox.jsx): City input and weather fetch logic
* [src/Infobox.jsx](src/Infobox.jsx): Weather details card
* [src/index.css](src/index.css): Global styles, theme variables, background, fonts
* [src/App.css](src/App.css): Layout shell, hero block, animation, responsive spacing
* [src/SearchBox.css](src/SearchBox.css): Search form and action button styling
* [src/Info.css](src/Info.css): Weather card and stats grid styling

---

## ⚙️ Setup

1. Install dependencies

   ```
   npm install
   ```

2. Create a `.env` file in the project root and add your API key

   ```
   VITE_API_KEY=your_openweathermap_api_key
   ```

3. Start the development server

   ```
   npm run dev
   ```

4. Build for production

   ```
   npm run build
   ```

---

## 🔐 Environment Variables

* `VITE_API_KEY`: Your OpenWeatherMap API key

Get a free API key from OpenWeatherMap and keep it in `.env` only.

---

## 🔄 How Data Flows

1. User enters a city in SearchBox
2. SearchBox calls OpenWeatherMap and creates a formatted weather object
3. WeatherApp receives this object through `updateWeatherData`
4. WeatherApp updates state and passes data to Infobox
5. Infobox re-renders with the latest weather values

---

## 📝 Notes

* If city search fails, verify spelling and API key
* Keep network access enabled for API calls
* The app currently uses metric units (Celsius)

---

## 📜 License

This project is for learning and personal practice.
