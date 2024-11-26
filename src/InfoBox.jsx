// Import the necessary dependencies
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import FlareIcon from '@mui/icons-material/Flare';
import "./InfoBox.css"

// Create the InfoBox component
export default function InfoBox({result}) {
    // Initial images
    const INIT_URL = "https://images.pexels.com/photos/409127/pexels-photo-409127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"   
    const HOT_URL = "https://images.unsplash.com/photo-1708064931211-62825371b683?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.pexels.com/photos/18908494/pexels-photo-18908494/free-photo-of-aerial-view-of-a-building-with-snow-on-the-roof.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    const RAINY_URL = "https://images.unsplash.com/photo-1574790989029-373ba6b885bb?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox">
            <h2>Weather Info</h2> <br />
            <Card sx={{ maxWidth: 550, borderRadius:"0.5rem" }} style={{boxShadow: "4px 4px 20px black"}}>
            <CardMedia
                sx={{ height: 140 }}
                image= {result.humidity>90?RAINY_URL:result.temp<280.15?COLD_URL:result.temp>300.15?HOT_URL:INIT_URL}
                title="city"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                <span style={{fontWeight: 600}}>{result.city}</span> {result.humidity>90?<ThunderstormIcon />:result.temp<280.15?<AcUnitIcon/>:result.temp>300.15?<FlareIcon/>:<WbSunnyIcon/>}
                </Typography>
                <Typography variant="body2" component={"div"}>
                    <div className='data'>
                        <p><i className="fa-solid fa-temperature-half"></i> &nbsp;Temperature: {result.temp}K</p>
                        <p><i className="fa-solid fa-temperature-quarter"></i>  &nbsp;Minimun-Temperature: {result.tempMin}K</p>
                        <p><i className="fa-solid fa-temperature-full"></i>  &nbsp;Maximum-Temperature: {result.tempMax}K</p>
                        <p><i className="fa-solid fa-cloud-rain"></i>  &nbsp;Humidity: {result.humidity}</p>
                        <p style={{textAlign: "left"}}>The weather can be summarized as <b>{result.weather}</b> and it feels like {result.feelsLike}K</p>
                    </div>
                </Typography>
            </CardContent>
            </Card>
        </div>
    );
} 