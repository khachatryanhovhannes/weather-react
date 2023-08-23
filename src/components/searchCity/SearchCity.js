import { useState } from "react"
import { getWeather } from "../../utils/api"
import styles from "./SearchCity.module.css"

export default function SearchCity({setWeatherData}) {
    const [text, setText] = useState('')

    function handleGetWeather (){
        getWeather(text)
        .then(res=>{
            if(!res.ok){
                throw new Error("Invalid name")
            }
            return res.json()
        })
        .then(res=>{
            setWeatherData(res)
            setText("")
        })
        .catch(err=>{
            console.log(err.message)
            setWeatherData(null)
        })
    }

    function handleEnterKeyDown(e){
        if(e.key === 'Enter'){
            handleGetWeather()
        }
    }

    return (
        <div className={styles.findCity} onKeyDown={(e)=>{handleEnterKeyDown(e)}}>
            <input type="text" 
                placeholder="City name..."
                value={text}
                onChange={(e)=>{
                    setText(e.target.value)
                }}
            />
            <button 
            onClick={(evt)=>{
                evt.preventDefault()
                handleGetWeather()
            }}
            >Show weather</button>
        </div>
    )
}