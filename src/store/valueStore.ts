import {AllWeather, City, List, Rain} from './types/types';
import {makeAutoObservable} from 'mobx';
import {fetchAllWeather, fetchAllWeatherByGeo} from '../services/currentWeather';
import {getHourlyTodayWeather, getWeekWeather} from '../shared/libs/helpers/getData';

class ValueStore {

    _degree = 'F'

    constructor() {
        makeAutoObservable(this)
    }


    setDegree(degree: string){
        this._degree = degree
    }

    get degree(){
        return this._degree
    }


    changeDegree(degree: string){
        try{
            if(degree == 'F') this.setDegree('C')
            if(degree == 'C') this.setDegree('F')
        }catch (e) {
            console.log(e)
        }
    }
}

export default ValueStore;