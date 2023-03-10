import { makeAutoObservable } from 'mobx';
import { fetchAllWeather, fetchAllWeatherByGeo } from 'services/currentWeather';
import { getHourlyTodayWeather, getWeekWeather } from 'shared/libs/helpers/getData';
import {
    AllWeather, City, List, Rain,
} from './types/types';

class DataStore {
    _currentWeather: AllWeather = <AllWeather>{};

    _today: List = <List>{};

    _location = '';

    _city: City = <City>{};

    _weekDays: List[] = <List[]>{};

    _hourly: List[] = <List[]>[];

    _rainChance: Rain[] = <Rain[]>{};

    constructor() {
        makeAutoObservable(this);
    }

    setCurrentWeather(currentWeather: AllWeather) {
        this._currentWeather = currentWeather;
    }

    get currentWeather() {
        return this._currentWeather;
    }

    setToday(today: List) {
        this._today = today;
    }

    get today() {
        return this._today;
    }

    setLocation(location: string) {
        this._location = location;
    }

    get location() {
        return this._location;
    }

    setCity(city: City) {
        this._city = city;
    }

    get city() {
        return this._city;
    }

    setWeekDays(weekDays: List[]) {
        this._weekDays = weekDays;
    }

    get weekDays() {
        return this._weekDays;
    }

    setHourly(hourly: List[]) {
        this._hourly = hourly;
    }

    get hourly() {
        return this._hourly;
    }

    setRainChance(rainChance: Rain[]) {
        this._rainChance = rainChance;
    }

    get rainChance() {
        return this._rainChance;
    }

    async fetchCurrentWeather(location?: string, lat?: string, lon?: string) {
        try {
            let data: AllWeather;
            if (location) {
                data = await fetchAllWeather(location);
            } else {
                data = await fetchAllWeatherByGeo(lat, lon);
                this.setLocation(data.city.name);
            }
            console.log(data);
            this.setCurrentWeather(data);

            const week = getWeekWeather(data.list);
            const hourly = getHourlyTodayWeather(data.list);
            // const rain = getRainChance(data.list)

            // console.log('WEEK',week)
            // console.log('HOURLY',hourly)

            this.setToday(data.list[0]);
            this.setCity(data.city);
            this.setWeekDays(week);
            this.setHourly(hourly);
            // this.setRainChance(rain)
        } catch (e) {
            console.log(e);
        }
    }
}

export default DataStore;
