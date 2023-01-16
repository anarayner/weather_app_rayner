import cls from './WeekDayCard.module.scss'
import {classNames} from '../../shared/libs/classNames/classNames';
import {useStore} from '../../store/store';
import {Card, Padding} from '../../shared/ui/Card/Card';
import WeatherIcon from '../../shared/assets/icons/coudy.svg'
import {observer} from 'mobx-react-lite';
import {Loader} from '../../shared/ui/Loader/Loader';
import {CurrentWeather, Main} from '../../store/types/types';
import {Button} from '../../shared/ui/Button';
import {ButtonTheme} from '../../shared/ui/Button/Button';
import {WeekDayDescCard} from '../WeekDayDescCard/WeekDayDescCard';
import {Modal} from '../../shared/ui/Modal/Modal';
import {useState} from 'react';
import {formatAMPM, formatDay, formatTime, tempt} from '../../shared/libs/convertData/convertData';


interface WeekDayCardProps {
    className?: string;
    date?: number | string;
    degree?: number;
    dayData?: Main;
    time?: string;
}

export const WeekDayCard = observer((props: WeekDayCardProps) => {
    const {
        className,
        degree,
        dayData,
        date,
        time
    } = props
    const { dataStore, valueStore } = useStore();
    const degreeValue = valueStore.degree

    if(!dataStore.currentWeather){
        return (<Loader/>)
    } else return (
        <div className={classNames(cls.CurrentDay, {}, [className])}>
            <div className={cls.top}>
                { date && <div className={cls.date}>{ formatDay(new Date(date)) }</div> }
                { time && <div className={cls.time}>{ formatAMPM(new Date(time)) }</div> }
            </div>
            <div className={cls.middle}>
                <div className={cls.icon}>{ <WeatherIcon/> }</div>
            </div>
            <div className={cls.bottom}>
                <span>{ Math.floor(tempt(degree, degreeValue)) }°</span>
            </div>
        </div>
    );
});