import cls from './CurrentDayCard.module.scss'
import {classNames} from "../../shared/libs/classNames/classNames";
import {useStore} from "../../store/store";
import {Card, Padding} from "../../shared/ui/Card/Card";
import WeatherIcon from '../../shared/assets/icons/coudy.svg'
import {observer} from "mobx-react-lite";
import {Loader} from "../../shared/ui/Loader/Loader";
import {formatAMPM, tempt} from "../../shared/libs/convertData/convertData";


interface CurrentDayProps {
    className?: string;
}

export const CurrentDayCard = observer(({className}: CurrentDayProps) => {
    const { dataStore } = useStore();

    const city = dataStore.city
    const today = dataStore.today
    console.log(today?.main?.temp)

    // console.log(dataStore.currentWeather?.base)

    if(!dataStore.today){
        return (<Loader/>)
    } else return (
        <div className={classNames(cls.CurrentDay, {}, [className])}>
            <Card padding={Padding.NONE}>
                <div className={cls.top}>
                    <div className={cls.day}>Monday</div>
                    <div className={cls.time}>{today?.weather?.[0]?.main}</div>
                </div>
                <div className={cls.middle}>
                    <span className={cls.degree}>{today?.main?.temp ? Math.floor(tempt(today?.main?.temp, 'F')): null}°F</span>
                    <div className={cls.icon}>{<WeatherIcon/>}</div>
                </div>
                <div className={cls.bottom}>
                    <div className={cls.info}>
                        <span>Real Feel:</span> {Math.floor(tempt(today?.main?.feels_like, 'F'))}°F
                    </div>
                    <div className={cls.info}>
                        <span>Wind:</span> {today?.wind?.speed} m/s
                    </div>
                    <div className={cls.info_double_container}>
                        <div><span>Pressure:</span> {today?.main?.pressure} hPa</div>
                        <div><span>Sunrise:</span> {formatAMPM(new Date(city?.sunrise))}</div>
                    </div>
                    <div className={cls.info_double_container}>
                        <div><span>Humidity:</span> {today?.main?.humidity} %</div>
                        <div><span>Sunset:</span> {formatAMPM(new Date(city?.sunset))} </div>
                    </div>
                </div>
            </Card>
        </div>
    );
});