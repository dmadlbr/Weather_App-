

export async function Getweather(city:string){
    const apiKey=process.env.WEATHER_API_KEY;
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
    const data = await response.json();
    console.log(data);
    return data;

}