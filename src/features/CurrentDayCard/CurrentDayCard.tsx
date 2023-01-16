import cls from './CurrentDayCard.module.scss'
import {classNames} from 'shared/libs/classNames/classNames';
import {useStore} from 'store/store';
import {Card, Padding} from 'shared/ui/Card/Card';
import WeatherIcon from 'shared/assets/icons/coudy.svg'
import {observer} from 'mobx-react-lite';
import {formatAMPM, formatDayOfWeek, tempt} from 'shared/libs/convertData/convertData';
import {City, List} from 'store/types/types';


interface CurrentDayProps {
    className?: string;
    city?: City;
    today?: List;
}

export const CurrentDayCard = observer((props: CurrentDayProps) => {
    const {
        className,
        today,
        city
    } = props
    const { valueStore } = useStore();
    const degree = valueStore.degree

    return (
        <div className={classNames(cls.CurrentDay, {}, [className])}>
            <Card padding={Padding.NONE}>
                <div className={cls.top}>
                    <div className={cls.day}>{ formatDayOfWeek(new Date(today?.dt_txt)) }</div>
                    <div className={cls.time}>{ today?.weather?.[0]?.main }</div>
                </div>
                <div className={cls.middle}>
                    <span className={cls.degree}>{ Math.floor(tempt(today?.main?.temp, degree)) }°{ degree }</span>
                    <div className={cls.icon}>{ <WeatherIcon/> }</div>
                </div>
                <div className={cls.bottom}>
                    <div className={cls.info}>
                        <span>Real Feel:</span> { Math.floor(tempt(today?.main?.feels_like, degree)) }°{ degree }
                    </div>
                    <div className={cls.info}>
                        <span>Wind:</span> { today?.wind?.speed } m/s
                    </div>
                    <div className={cls.info_double_container}>
                        <div><span>Pressure:</span> { today?.main?.pressure } hPa</div>
                        <div><span>Sunrise:</span> { formatAMPM(new Date(city?.sunrise)) }</div>
                    </div>
                    <div className={cls.info_double_container}>
                        <div><span>Humidity:</span> { today?.main?.humidity } %</div>
                        <div><span>Sunset:</span> { formatAMPM(new Date(city?.sunset)) } </div>
                    </div>
                </div>
            </Card>
        </div>
    );
});