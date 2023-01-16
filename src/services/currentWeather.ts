import {$api} from 'shared/api/api';
import {API_KEY} from 'shared/consts/consts';

export const fetchCurrentWeatherByLocation = async (location: string)=>{
    const {data} = await $api.get(`weather?q=${location}&appid=${API_KEY}`)
    // console.log(data)
    return data
}

export const fetchAllWeather = async (location: string)=>{
    const {data} = await $api.get(`forecast?q=${location}&appid=${API_KEY}`)
    // console.log(data)
    return data
}

export const fetchAllWeatherByGeo = async (lat: string, lon: string)=>{
    const {data} = await $api.get(`forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    // console.log(data)
    return data
}
