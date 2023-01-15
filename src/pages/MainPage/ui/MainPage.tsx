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



const MainPage = observer(() => {

    const [location, setLocation] = useState('')

    const { dataStore } = useStore();


    useEffect(() => {
        dataStore.fetchCurrentWeather('')
        // const obj =
    }, [dataStore]);

    const city = dataStore.city
    const today = dataStore.today
    const week = dataStore.weekDays
    const hourly = dataStore.hourly
    const rainChance = dataStore.rainChance
    const history = dataStore.searchHistory
    console.log(today?.main?.temp)
    console.log("HISTORY", toJS(history))

    if(!today?.main?.temp){
        return (<div className={'loader'}><Loader/></div>)
    }

    return (
        <div className={cls2.wrapper} id="fullheight">
            <div className={cls2.top}>
                <div className={cls2.div1}><TopLeft today={today} city={city} week={week} hourly={hourly}/></div>
                <div className={cls2.div2}><TopRight rainChance={rainChance}/></div>
            </div>
            <div className={cls2.bottom}>
                <div className={cls2.div3}><BottomLeft today={today} city={city}/></div>
                <div className={cls2.div4}><BottomRight searchHistory={history}/></div>
            </div>
        </div>
    )
})

export default MainPage
