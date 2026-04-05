import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Info.css';

export default function Infobox({ info }){
    const weatherIcon = info.weather?.toLowerCase().includes('cloud')
        ? '☁️'
        : info.weather?.toLowerCase().includes('rain')
            ? '🌧️'
            : info.weather?.toLowerCase().includes('clear')
                ? '☀️'
                : info.weather?.toLowerCase().includes('snow')
                    ? '❄️'
                    : '🌤️';

    return (
        <div className="Infobox">
            <div className="CardContainer">
                <Card className="weather-card" sx={{ maxWidth: 460, width: '100%' }}>
                    <CardContent>
                        <Typography className="weather-title" gutterBottom variant="h5" component="div">
                            <span className="weather-icon" aria-hidden="true">{weatherIcon}</span>
                            {info.city}, {info.country}
                        </Typography>
                        <Typography component="div" variant="body2">
                            <div className="temp-band">
                                <p className="temp-main">{Math.round(info.temp)}°C</p>
                                <p className="weather-type">{info.weather}</p>
                            </div>
                            <div className="stats-grid">
                                <p><span>Min</span> {info.temp_min}°C</p>
                                <p><span>Max</span> {info.temp_max}°C</p>
                                <p><span>Humidity</span> {info.humidity}%</p>
                                <p><span>Pressure</span> {info.pressure} hPa</p>
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}