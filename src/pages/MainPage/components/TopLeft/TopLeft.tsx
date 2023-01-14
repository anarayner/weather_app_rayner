import cls from './TopLeft.module.scss'
import {memo} from 'react';
import {classNames} from "../../../../shared/libs/classNames/classNames";
import {Clock, ClockSize} from "../../../../shared/ui/Clock/Clock";
import {Button} from "../../../../shared/ui/Button";
import {ButtonSize} from "../../../../shared/ui/Button/Button";
import {CurrentDayCard} from "../../../../features/CurrentDayCard/CurrentDayCard";
import {WeekDayCard} from "../../../../features/WeekDayCard/WeekDayCard";


interface TopLeftProps {
    className?: string;
    data?: any
}

export const TopLeft = memo(({className}: TopLeftProps) => {
    const days = [0, 1, 2, 3, 4, 5, 6]

    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.date}>
                <Clock size={ClockSize.L}/>
                <Button size={ButtonSize.S} className={cls.btn}>C °</Button>
            </div>
            <div className={cls.weather_container}>
                <CurrentDayCard/>
                {days.map((day) =>
                    <WeekDayCard key={day}/>
                )}
            </div>
        </div>
    );
});