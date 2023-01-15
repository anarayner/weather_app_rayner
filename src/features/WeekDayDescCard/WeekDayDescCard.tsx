import cls from './WeekDayDescCard.module.scss'
import {memo} from 'react';
import {classNames} from "../../shared/libs/classNames/classNames";
import {Card, Padding} from "../../shared/ui/Card/Card";
import {tempt} from "../../shared/libs/convertData/convertData";
import WeatherIcon from "../../shared/assets/icons/coudy.svg";
import {useStore} from "../../store/store";


interface WeekDayDescCardProps {
    className?: string;
    dayData?: any
}

export const WeekDayDescCard = memo(({className}: WeekDayDescCardProps) => {
    const { dataStore } = useStore();

    const day = dataStore.currentWeather
    // console.log(dataStore.currentWeather?.base)
    return (
        <div className={classNames(cls.WeekDayDescCard, {}, [className])}>
            <Card padding={Padding.NONE}>
                <div className={cls.top}>
                    <div className={cls.day}>Monday</div>
                </div>
                <div className={cls.middle}>
                    {/*<span className={cls.degree}>{day?.main?.temp ? Math.floor(tempt(day?.main?.temp, 'C')): null}°F</span>*/}
                    <div className={cls.icon}>{<WeatherIcon/>}</div>
                </div>
                <div className={cls.bottom}>
                    <div className={cls.container}>
                        <div className={cls.info1}>
                            <p><span>Pressure:</span> 1000 MB</p>
                            <p><span>Pressure:</span> 1000 MB</p>
                            <p><span>Pressure:</span> 1000 MB</p>
                            <p><span>Pressure:</span> 1000 MB</p>
                            <p><span>Pressure:</span> 1000 MB</p>
                        </div>
                        <div className={cls.info2}>
                            <p><span>Sunrise:</span> 6:02 AM</p>
                            <p><span>Sunrise:</span> 6:02 AM</p>
                        </div>
                    </div>

                </div>
            </Card>
        </div>
    );
});