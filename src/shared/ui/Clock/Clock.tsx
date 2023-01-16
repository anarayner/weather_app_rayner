import cls from './Clock.module.scss'
import {memo, useEffect, useState} from 'react';
import {classNames} from '../../libs/classNames/classNames';
import dataStore from '../../../store/dataStore';
import {formatAMPM, formatDayWithYear} from '../../libs/convertData/convertData';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../../store/store';

export const enum ClockSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface ClockProps {
    className?: string;
    size?: ClockSize
}

export const Clock = observer(({className, size}: ClockProps) => {

    const [currentTime, setCurrentTime] = useState(new Date())
    const {dataStore} = useStore()

    const day = formatDayWithYear(currentTime)
    const time = formatAMPM(currentTime)

    useEffect(() => {
        setInterval(() => setCurrentTime(new Date()), 1000);
    }, []);

    const city = dataStore.city
    return (
        <div className={classNames(cls.Clock, {}, [className, cls[size]])}>
            <p>Today in { city?.name }</p>
            <p className={cls.day}>{ day }</p>
            <p className={cls.time}>{ time }</p>
        </div>
    );
});