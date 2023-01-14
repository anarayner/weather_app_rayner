import React, {useContext, useEffect, useState} from 'react'
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/store";
import {TopLeft} from "../components/TopLeft/TopLeft";
import {BottomLeft} from "../components/BottomLeft/BottomLeft";
import {BottomRight} from "../components/BottomRight/BottomRight";
import {ContainerGridTheme, Grid} from "../components/Grid/Grid";
import {TopRight} from "../components/TopRight/TopRight";


const MainPage = observer(() => {

    const [location, setLocation] = useState('')

    const { dataStore } = useStore();


    useEffect(() => {
        dataStore.fetchCurrentWeather('')
    }, [dataStore]);

    console.log(dataStore.currentWeather.city)



    return (
        <Grid
            grid={ContainerGridTheme.R2C2}
            top_left={<TopLeft/>}
            top_right={<TopRight/>}
            bottom_left={<BottomLeft/>}
            bottom_right={<BottomRight/>}
        />
    )
})

export default MainPage
