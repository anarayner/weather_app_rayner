import cls from './Clock.module.scss'
import {memo, useEffect, useState} from 'react';
import {classNames} from "../../libs/classNames/classNames";
import dataStore from "../../../store/dataStore";
import {formatAMPM} from "../../libs/convertData/convertData";

export const enum ClockSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface ClockProps {
    className?: string;
    size?: ClockSize
}

export const Clock = memo(({className, size}: ClockProps) => {
    const [currentTime, setCurrentTime] = useState(new Date())
    const day = currentTime.getDate() + '  ' + currentTime.toLocaleString('default', { month: 'short' }) + '  ' + currentTime.getFullYear()
    // const time = currentTime.getHours() + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds();
    const time = formatAMPM(currentTime)

    useEffect(() => {
        setInterval(() => setCurrentTime(new Date()), 1000);
    }, [dataStore]);

    return (
        <div className={classNames(cls.Clock, {}, [className, cls[size]])}>
            <p>{day}</p>
            <p className={cls.time}>{time}</p>
        </div>
    );
});