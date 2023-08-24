import styles from "./SearchedResult.module.css"


export default function SearchedResult({ weatherData }) {
    return (
        <div className={styles.searchedResult}>
            {weatherData ? <div className={styles.searchedResultTrue}>
                <div>
                    <img src={weatherData.current.condition.icon} alt="" />
                    <p>{weatherData.current.condition.text}</p>
                </div>
                <div>
                    <h1>City: {weatherData.location.name}</h1>
                    <h3>Country: {weatherData.location.country}</h3>
                    <p>Local time: {weatherData.location.localtime}</p>
                    <p>Temperature: {weatherData.current.temp_c}°C </p>
                    <p>Wind speed: {weatherData.current.vis_km}km/h</p>
                    <p></p>
                </div>
            </div> : 
            <h1>Pleace type correct name</h1>}
        </div>
    
    )
}