// Import the necessary dependencies
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Alert from '@mui/material/Alert';
import "./SearchBox.css"
import { useState } from 'react';
import  getWeatherInfo  from './helper';

// Create the SearchBox component
export default function SearchBox({updateWeather}) {

    // Create state variables
    let [city, setCity] = useState("");
    let[error, setError] = useState(false);

    // Update city state variable
    function handleChange(event) {
        setCity(event.target.value);        
    }

    // Handle onSubmit event
    async function handleSubmit(event) {
        try {
            event.preventDefault();
            setCity("");
            let data = await getWeatherInfo(city);  //Request data from API
            updateWeather(data); //Update the weatherData state variable in WeatherApp.jsx
        } catch (error) {
            setError(true);
        }
    }

    return (
        <>
            <form action="#" onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required/> &nbsp;&nbsp;
                <Button type='Submit' id="search" size="large" variant="contained" startIcon={<SearchIcon />}>
                    Search
                </Button>
            </form> <br />
            {/* Display eror */}
            {error==true?<span> <Alert sx={{  maxWidth: 500, margin: "2px auto" }} severity="error">This city does not exist.</Alert></span>:""}
        </>
    );    
}