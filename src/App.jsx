// Import the CSS file
import './App.css'
import ParticlesComponent from './Particles';

// Create the App component
import WeatherApp from './WeatherApp';
function App() {
  return (
    <>
      <h1>Weather Report</h1>
      <WeatherApp></WeatherApp>
      <ParticlesComponent id="particles"></ParticlesComponent>
    </>
  );
}

// Export App component
export default App
