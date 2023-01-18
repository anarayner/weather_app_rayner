import { memo, useEffect, useState } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { formatAMPM, formatDayWithYear } from 'shared/libs/convertData/convertData';
import { observer } from 'mobx-react-lite';
import { useStore } from 'store/store';
import { isMobile } from 'react-device-detect';
import cls from './Clock.module.scss';

export const enum ClockSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface ClockProps {
    className?: string;
    size?: ClockSize
}

export const Clock = observer(({ className, size }: ClockProps) => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const { dataStore } = useStore();

    const day = formatDayWithYear(currentTime);
    const time = formatAMPM(currentTime);

    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const { city } = dataStore;
    return (
        <div className={classNames(cls.Clock, {}, [className, cls[size]])}>
            <p>
                { 'Today in ' }
                { city?.name }
            </p>
            <p className={isMobile ? cls.day_m : cls.day}>{ day }</p>
            <p className={isMobile ? cls.time_m : cls.time}>{ time }</p>
        </div>
    );
});
