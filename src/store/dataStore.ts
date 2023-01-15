import {makeAutoObservable} from "mobx"
import {AllWeather, City, List, Rain, SearchHistory} from "./types/types";
import axios from "axios";
import {API_KEY} from "../shared/consts/consts";
import {fetchAllWeather} from "../services/currentWeather";
import {
    getHourlyTodayWeather,
    getRainChance,
    getSearchCity,
    getWeekWeather
} from "../shared/libs/convertData/convertData";


class DataStore {
    _currentWeather: AllWeather = <AllWeather>{}
    _today: List = <List>{}
    _location = ''
    _city: City = <City>{}
    _weekDays: List[] = <List[]>{}
    _hourly: List[] = <List[]>[]
    _rainChance: Rain[] = <Rain[]>{}
    _searchHistory: SearchHistory[] = <SearchHistory[]>[]
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

    setWeekDays(weekDays: List[]){
        this._weekDays = weekDays
    }

    get weekDays(){
        return this._weekDays
    }

    setHourly(hourly: List[]){
        this._hourly = hourly
    }

    get hourly(){
        return this._hourly
    }

    setRainChance(rainChance: Rain[]){
        this._rainChance = rainChance
    }

    get rainChance(){
        return this._rainChance
    }

    setSearchHistory(searchHistory: SearchHistory){
        this._searchHistory.unshift(searchHistory)
    }

    get searchHistory(){
        return this._searchHistory
    }

    async fetchCurrentWeather(location: string){
        try{
            if(location.length == 0){
                const loc = await axios.get(`http://api.openweathermap.org/geo/1.0/zip?zip=E14,GB&appid=${API_KEY}`)
                location = loc.data.name
                console.log(location)
                if(!this._location) this.setLocation(location)
            }

            const data = await fetchAllWeather(location)
            console.log(data)
            this.setCurrentWeather(data)

            const week = getWeekWeather(data.list)
            const hourly = getHourlyTodayWeather(data.list)
            // const rain = getRainChance(data.list)
            const rain = [] as any
            // const week = [] as any


            const searchCity = getSearchCity(data)

            console.log('WEEK',week)
            console.log('HOURLY',hourly)
            console.log('RAIN',rain)
            console.log('SEARCH_CITY',searchCity)


            this.setToday(data.list[0])
            this.setCity(data.city)
            this.setWeekDays(week)
            this.setHourly(hourly)
            this.setRainChance(rain)
            this.setSearchHistory(searchCity)

        }catch (e) {
            console.log(e)
        }
    }


}

export default DataStore;