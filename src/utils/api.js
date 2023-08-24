async function getWeather(city) {
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=fd581478316b41fb81282231232308&q=${city}&aqi=no`)
    return res
}

export { getWeather }