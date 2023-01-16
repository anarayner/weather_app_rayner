import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite';
import {useStore} from '../../../store/store';
import {TopLeft} from '../components/TopLeft/TopLeft';
import {BottomLeft} from '../components/BottomLeft/BottomLeft';
import {BottomRight} from '../components/BottomRight/BottomRight';
import {TopRight} from '../components/TopRight/TopRight';
import {Loader} from '../../../shared/ui/Loader/Loader';
import '../../../app/styles/index.scss'
import cls from '../../AboutPage/ui/del.module.scss';
import {getSearchCity} from '../../../shared/libs/helpers/getData';

const MainPage = observer(() => {

    const { dataStore } = useStore();

    useEffect(() => {
        dataStore.fetchCurrentWeather('Chattanooga')
    }, [dataStore]);

    const city = dataStore.city
    const today = dataStore.today
    const week = dataStore.weekDays
    const hourly = dataStore.hourly
    const currentLocation = dataStore.location

    if(!today?.main?.temp){
        return (<div className={'loader'}><Loader/></div>)
    }

    const searchObject =  getSearchCity(today, city?.name, currentLocation)

    const searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    console.log('searchHistory',searchHistory)
    const hasSearch = searchHistory.some((d:any) => d?.city == searchObject?.city)
    console.log('hasSearch', hasSearch)

    if(searchObject && !hasSearch){
        searchHistory.unshift(searchObject)
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }


    return (
        <div className={cls.wrapper} id="fullheight">
            <div className={cls.top}>
                <div className={cls.div1}><TopLeft today={today} city={city} week={week} hourly={hourly}/></div>
                <div className={cls.div2}><TopRight week={week} hourly={hourly}/></div>
            </div>
            <div className={cls.bottom}>
                <div className={cls.div3}><BottomLeft today={today} city={city}/></div>
                <div className={cls.div4}><BottomRight searchHistory={searchHistory}/></div>
            </div>
        </div>
    )
})

export default MainPage
