import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite';
import {useStore} from 'store/store';
import {TopLeft} from '../components/TopLeft/TopLeft';
import {BottomLeft} from '../components/BottomLeft/BottomLeft';
import {BottomRight} from '../components/BottomRight/BottomRight';
import {TopRight} from '../components/TopRight/TopRight';
import {Loader} from 'shared/ui/Loader/Loader';
import 'app/styles/index.scss'
import cls from './MainPage.module.scss';
import {getSearchCity} from 'shared/libs/helpers/getData';
import {useGeoLocation} from 'shared/libs/hooks/useGeolocation'
import {localStorageSave} from 'shared/libs/helpers/localStorage';
import {isMobile} from 'react-device-detect';


const MainPage = observer(() => {

    const { dataStore } = useStore();
    const location = useGeoLocation()

    useEffect(() => {
        if(location.loaded) {
            dataStore.fetchCurrentWeather('', location.coordinates.lat, location.coordinates.lng)
        }
    }, [dataStore, location.coordinates.lat, location.coordinates.lng, location.loaded]);

    const city = dataStore.city
    const today = dataStore.today

    const currentLocation = dataStore.location

    if(!today?.main?.temp){
        return (<div className={'loader'}><Loader/></div>)
    }

    const searchObject =  getSearchCity(today, city?.name, currentLocation)
    const searchHistory = localStorageSave(searchObject)

    if(isMobile){
        return (
            <div className={cls.wrapper_mobile}>
                <div className={cls.d1_m}><TopLeft /></div>
            </div>
        )}

    return (
        <div className={isMobile? cls.wrapper_mobile: cls.wrapper} id="fullheight">
            <div className={cls.top}>
                <div className={isMobile? cls.d1_m : cls.d1}><TopLeft /></div>
                <div className={cls.d2}><TopRight /></div>
            </div>
            <div className={cls.bottom}>
                <div className={cls.d3}><BottomLeft /></div>
                <div className={cls.d4}><BottomRight searchHistory={searchHistory}/></div>
            </div>
        </div>
    )
})

export default MainPage
