import {makeAutoObservable} from "mobx"
import {AllWeather, City, List} from "./types/types";
import axios from "axios";
import {API_KEY} from "../shared/consts/consts";
import {fetchAllWeather} from "../services/currentWeather";


class DataStore {
    _currentWeather: AllWeather = {} as AllWeather
    _today: List = {} as List
    _location = ''
    _city: City = {} as City

    constructor() {
        makeAutoObservable(this)
    }


    setCurrentWeather(currentWeather: AllWeather){
        this._currentWeather = currentWeather
    }

    get currentWeather(){
        return this._currentWeather
    }

    setToday(today: List){
        this._today = today
    }

    get today(){
        return this._today
    }

    setLocation(location: string){
        this._location = location
    }

    get location(){
        return this._location
    }

    setCity(city: City){
        this._city = city
    }

    get city(){
        return this._city
    }


    async fetchCurrentWeather(location: string){
        try{
            if(location.length == 0){
                const loc = await axios.get(`http://api.openweathermap.org/geo/1.0/zip?zip=E14,GB&appid=${API_KEY}`)
                location = loc.data.name
                console.log(location)
                if(!this._location) this.setLocation(location)

                console.log('THIS LOC', this._location)

            }
            // const data = await fetchCurrentWeatherByLocation(location)
            const data = await fetchAllWeather(location)

            console.log(data)
            this.setCurrentWeather(data)
            this.setToday(data.list[0])
            this.setCity(data.city)
            console.log(this._currentWeather)
        }catch (e) {
            console.log(e)
        }
    }


}

export default DataStore;