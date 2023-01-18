import { classNames } from 'shared/libs/classNames/classNames';
import { useStore } from 'store/store';
import WeatherIcon from 'shared/assets/icons/coudy.svg';
import { observer } from 'mobx-react-lite';
import { Loader } from 'shared/ui/Loader/Loader';
import { Main } from 'store/types/types';
import { formatAMPM, formatDay, tempt } from 'shared/libs/convertData/convertData';
import { isMobile } from 'react-device-detect';
import cls from './WeekDayCard.module.scss';

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
        date,
        time,
    } = props;
    const { dataStore, valueStore } = useStore();
    const degreeValue = valueStore.degree;

    if (!dataStore.currentWeather) {
        return (<Loader />);
    } return (
        <div className={classNames(isMobile ? cls.WeekDayCard_m : cls.WeekDayCard, {}, [className])}>
            <div className={cls.top}>
                { date && <div className={cls.date}>{ formatDay(new Date(date)) }</div> }
                { time && <div className={cls.time}>{ formatAMPM(time) }</div> }
            </div>
            <div className={cls.middle}>
                { !isMobile ? <div className={cls.icon}><WeatherIcon /></div> : null }
            </div>
            <div className={isMobile ? cls.bottom_m : cls.bottom}>
                <span>
                    { Math.floor(tempt(degree, degreeValue)) }
                    °
                </span>
            </div>
        </div>
    );
});
