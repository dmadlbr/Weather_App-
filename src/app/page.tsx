
import WeatherForm from "./weatherForm";
import { Getweather } from "@/lib/weather";
import { Suspense } from "react";

async function Weather({searchParams}:{searchParams:Promise<{[key: string]: string | undefined }>}){
  try{
    const {city} = await searchParams;
    const weather = await Getweather(city || "london");

  return <div className="min-h-screen bg-slate-100 flex flex-col items-center px-4 py-12">
    <h1 className="text-4xl font-bold text-slate-800 mb-6">Weather Dashboard</h1>

    <WeatherForm />
    <div className="mt-10 w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">
      <h3 className="text-3xl font-bold text-slate-800 mb-2">{weather.location.name}</h3>
      <h3 className="text-gray-500 text-lg mb-6">{weather.location.country}</h3>
      <h3 className="text-6xl font-bold text-blue-600 mb-4">{weather.current.temp_c}</h3>
    </div>
  </div>
}catch(error){
  return <div className="min-h-screen flex items-center justify-center bg-slate-100">
    <p className="text-red-600 text-xl font-semibold">City not available</p>
    </div>
}
}

export default function Home({searchParams}:{searchParams:Promise<{[key: string]: string | undefined }>}
){
  return <div>
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-xl text-gray-600">Loading.....</div>}>
      <Weather searchParams={searchParams}/>    </Suspense>
  </div>
}


