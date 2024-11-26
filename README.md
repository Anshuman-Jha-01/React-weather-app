# Weather Application

This project is a **Weather Application** that provides real-time weather information for any city entered by the user. It displays detailed weather data such as temperature, humidity, and weather conditions using data fetched from the OpenWeatherMap API.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Project Structure](#project-structure)
- [License](#license)

---

## Project Overview

The **Weather Application** is built using **React.js** and leverages Material-UI for user interface components. It features interactive animations and dynamic backgrounds to enhance the user experience. It fetches weather data in real-time and updates the interface based on user input.

---

## Features

- Search weather data for any city.
- Displays:
  - Current temperature
  - Minimum and maximum temperatures
  - Humidity levels
  - Weather description
  - Weather icons based on conditions
- Interactive particle effects for a visually appealing interface.
- Responsive design for all device sizes.
- Error handling for invalid city names.
- Dynamic images based on weather conditions.

---

## Technologies Used

- **Frontend:**
  - React.js
  - Material-UI
  - Font Awesome
- **Backend:**
  - OpenWeatherMap API
- **Libraries:**
  - tsparticles for particle effects
  - React state management with hooks
  - Fetch API for data fetching
- **Styling:**
  - CSS

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anshuman-Jha-01/React-weather-app.git
   cd React-weather-app

2. **Install dependencies:**
    ```bash 
    npm install

3. **Set up the OpenWeatherMap API:**
- Obtain an API key from OpenWeatherMap.
- Replace [Your API Key] in helper.js with your API key.

4. **Start the development server:**
    ```bash 
    npm create vite
    npm run dev

5. **Open the application in your browser:**
    ```bash
      http://localhost:5173/

## Usage
1. Enter the name of a city in the search box and click **Search.**
2. View the weather information displayed in the **InfoBox.**
3. Explore dynamic backgrounds and icons representing different weather conditions.
4. Use the particle animations as interactive elements on hover and click.

## Components
1. ```App.jsx```
  - Root component that renders the application.
  - Integrates ```WeatherApp``` and ```ParticlesComponent```.

2. ```WeatherApp.jsx```
  - Manages the main weather data state.
  - Renders the ```SearchBox``` for input and ```InfoBox``` for displaying weather details.

3. ```SearchBox.jsx```
  - Input field for entering a city name.
  - Submits the request to fetch weather data from the API.

4. ```InfoBox.jsx```
  - Displays weather information in a styled card format.
  - Updates dynamically based on fetched data.

5. ```Particles.jsx```
  - Adds interactive particle effects to the background.

6. ```helper.js```
  - Handles the API request to OpenWeatherMap.
  - Formats the response into usable data for the application.

## Project Structure
  ```bash
    /src
    ├── App.jsx             # Main app component
    ├── WeatherApp.jsx      # Core weather app component
    ├── SearchBox.jsx       # Search input component
    ├── InfoBox.jsx         # Weather information display component
    ├── Particles.jsx       # Particle effects component
    ├── helper.js           # API logic
    ├── main.jsx            # Entry point for React app
    ├── App.css             # Styling for App.jsx
    ├── InfoBox.css         # Styling for InfoBox.jsx
    ├── SearchBox.css       # Styling for SearchBox.jsx
    └── index.html          # HTML template
  ```

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
