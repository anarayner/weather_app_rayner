import cls from './BottomLeft.module.scss'
import {memo} from 'react';
import {classNames} from "../../../../shared/libs/classNames/classNames";
import {WeatherDescCard} from "../../../../features/WeatherDescCard/WeatherDescCard";


interface BottomLeftProps {
    className?: string;
}

export const BottomLeft = memo(({className}: BottomLeftProps) => {
    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.card_grid} >
                <p className={cls.title}>Today overview</p>
                <div className={cls.div1}>
                    <WeatherDescCard/>
                </div>
                <div className={cls.div2}>
                    <WeatherDescCard/>
                </div>
                <div className={cls.div3}>
                    <WeatherDescCard/>
                </div>
                <div className={cls.div4}>
                    <WeatherDescCard/>
                </div>
                <div className={cls.div5}>
                    <WeatherDescCard/>
                </div>
                <div className={cls.div6}>
                    <WeatherDescCard/>
                </div>
                <div className={cls.div7}>
                    <WeatherDescCard/>
                </div>
                <div className={cls.div8}>
                    <WeatherDescCard/>
                </div>
                <div className={cls.div9}>
                    <WeatherDescCard/>
                </div>
            </div>
        </div>
    );
});