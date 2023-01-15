import cls from './TopLeft.module.scss'
import {memo} from 'react';
import {classNames} from "../../../../shared/libs/classNames/classNames";
import {Clock, ClockSize} from "../../../../shared/ui/Clock/Clock";
import {Button} from "../../../../shared/ui/Button";
import {ButtonSize} from "../../../../shared/ui/Button/Button";
import {CurrentDayCard} from "../../../../features/CurrentDayCard/CurrentDayCard";
import {WeekDayCard} from "../../../../features/WeekDayCard/WeekDayCard";
import {City, List} from "../../../../store/types/types";


interface TopLeftProps {
    className?: string;
    city?: City;
    today?: List;
    week?: List[];
    hourly?: List[]
}

export const TopLeft = memo((props: TopLeftProps) => {
    const {
        className,
        today,
        city,
        week,
        hourly
    } = props
    const hours = [0, 1, 2]

    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.date}>
                <Clock size={ClockSize.L}/>
                <Button size={ButtonSize.S} className={cls.btn}>C °</Button>
            </div>
            <div className={cls.weather_container}>
                <CurrentDayCard today={today} city={city}/>
                {hourly.map((day) =>
                    <WeekDayCard key={day?.dt} time={day?.dt_txt} degree={day?.main?.temp}/>
                )}
                {week.map((day) =>
                    <WeekDayCard key={day?.dt} date={day?.dt_txt} degree={day?.main?.temp}/>
                )}
            </div>
        </div>
    );
});