import { classNames } from 'shared/libs/classNames/classNames';
import { useStore } from 'store/store';
import { Card, Padding } from 'shared/ui/Card/Card';
import WeatherIcon from 'shared/assets/icons/coudy.svg';
import { observer } from 'mobx-react-lite';
import {
    formatAMPM, formatDayOfWeek, tempt, toK, toMiles,
} from 'shared/libs/convertData/convertData';
import { isMobile } from 'react-device-detect';
import cls from './CurrentDayCard.module.scss';

interface CurrentDayProps {
    className?: string;
}

export const CurrentDayCard = observer(({ className }: CurrentDayProps) => {
    const { valueStore, dataStore } = useStore();
    const { degree } = valueStore;
    const { city } = dataStore;
    const { today } = dataStore;

    return (
        <div className={classNames(isMobile ? cls.CurrentDay_m : cls.CurrentDay, {}, [className])}>
            <Card padding={Padding.NONE}>
                <div className={cls.top}>
                    <div className={cls.day}>{ formatDayOfWeek(new Date(today?.dt_txt)) }</div>
                    <div className={cls.time}>{ today?.weather?.[0]?.main }</div>
                </div>
                <div className={cls.middle}>
                    <span className={cls.degree}>
                        { Math.floor(tempt(today?.main?.temp, degree)) }
                        °
                        { degree }
                    </span>
                    <div className={cls.icon}><WeatherIcon /></div>
                </div>
                <div className={cls.bottom}>
                    <div className={cls.info}>
                        <span>Real Feel:</span>
                        { ' ' }
                        { Math.floor(tempt(today?.main?.feels_like, degree)) }
                        °
                        { degree }
                    </div>
                    <div className={cls.info}>
                        <span>Wind:</span>
                        { ' ' }
                        { today?.wind?.speed }
                        { ' ' }
                        m/s
                    </div>
                    <div className={cls.info_double_container}>
                        <div>
                            <span>Pressure:</span>
                            { ' ' }
                            { today?.main?.pressure }
                            { ' ' }
                            hPa
                        </div>
                        <div>
                            <span>Visibility:</span>
                            { ' ' }
                            { toMiles(today?.visibility) }
                            { ' ' }
                            m
                        </div>
                    </div>
                    <div className={cls.info_double_container}>
                        <div>
                            <span>Humidity:</span>
                            { ' ' }
                            { today?.main?.humidity }
                            { ' ' }
                            %
                        </div>
                        <div>
                            <span>Population:</span>
                            { ' ' }
                            { toK(city?.population) }
                            { ' ' }
                            k
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
});
