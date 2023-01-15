import React, {useContext, useEffect, useState} from 'react'
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/store";
import {TopLeft} from "../components/TopLeft/TopLeft";
import {BottomLeft} from "../components/BottomLeft/BottomLeft";
import {BottomRight} from "../components/BottomRight/BottomRight";
import {ContainerGridTheme, Grid} from "../components/Grid/Grid";
import {TopRight} from "../components/TopRight/TopRight";
import {Loader} from "../../../shared/ui/Loader/Loader";
import '../../../app/styles/index.scss'
import cls from "../../AboutPage/ui/del.module.scss";
import cls2 from "../../AboutPage/ui/del.module.scss";
import {toJS} from "mobx";
import {SearchHistory} from "../../../store/types/types";
import {getSearchCity} from "../../../shared/libs/helpers/getData";



const MainPage = observer(() => {

    const [location, setLocation] = useState('')

    const { dataStore } = useStore();


    useEffect(() => {
        dataStore.fetchCurrentWeather('')
    }, [dataStore]);

    const city = dataStore.city
    const today = dataStore.today
    const week = dataStore.weekDays
    const hourly = dataStore.hourly
    const currentLocation = dataStore.location


    console.log(today?.main?.temp)
    console.log("TODAY", toJS(today))


    if(!today?.main?.temp){
        return (<div className={'loader'}><Loader/></div>)
    }

    const searchObject =  getSearchCity(today, city?.name, currentLocation)

    const searchHistory = JSON.parse(localStorage.getItem("searchHistory") || "[]");
    console.log('searchHistory',searchHistory)
    const hasSearch = searchHistory.some((d:any) => d.city == searchObject?.city)
    console.log("hasSearch", hasSearch)

    if(searchObject && !hasSearch){
        searchHistory.unshift(searchObject)
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    }


    return (
        <div className={cls2.wrapper} id="fullheight">
            <div className={cls2.top}>
                <div className={cls2.div1}><TopLeft today={today} city={city} week={week} hourly={hourly}/></div>
                <div className={cls2.div2}><TopRight week={week} hourly={hourly}/></div>
            </div>
            <div className={cls2.bottom}>
                <div className={cls2.div3}><BottomLeft today={today} city={city}/></div>
                <div className={cls2.div4}><BottomRight searchHistory={searchHistory}/></div>
            </div>
        </div>
    )
})

export default MainPage
