'use client'
import SearchBar from "@/components/SearchBar"
import { Card, CardBody, CardHeader } from "@heroui/card"
import { WiHumidity, WiRain } from "react-icons/wi"
import Image from "next/image"
import { useEffect, useState } from "react"

interface weatherResponse {
  main: {
    temp: number
    humidity: number
  }
  name: string
  sys: {
    country: string
  }
}

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState<weatherResponse | null>(null)
  const searchCity = async (city: any) => {
    try {
      if (!process.env.NEXT_PUBLIC_WEATHER_API) {
        throw new Error("Weather API is not configured")

      }

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API}&units=metric`
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error("City not found")
      }
      const data: weatherResponse = await response.json()
      setWeatherData(data)
    } catch (error: any) {
      console.error("Error with the API", error)
    }
  }

  useEffect(() => {
    searchCity({ city: "Dhaka" })
  }, [])
  return (
    <Card className="py-4 bg-slate-300/30 px-5 rounded-lg">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{weatherData?.name}</p>
        <small className="text-default-500">{weatherData?.sys.country}</small>
      </CardHeader>
      <SearchBar onSearch={searchCity} />

      <CardBody className="overflow-hidden mx-auto py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWJuZHh0cW9sNmM2eXl1ZjNramh1M2U5M3ZiNHQyN3FqcGt6a3FwNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YQJX1dSYxN53E4TxZc/giphy.gif"
          width={270}
          height={270}
        />
        <div className="flex flex-row mt-4 justify-between">
          <div className="temprature">
            <div aria-label="Temparature" className="flex-col flex">

              <WiRain className="h-10 w-10" />
            </div>
            {weatherData?.main.temp}℃</div>
          <div className="humidity">
            <div>
              <WiHumidity className="h-10 w-10" />
            </div>
            {weatherData?.main.humidity}%
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default WeatherCard
