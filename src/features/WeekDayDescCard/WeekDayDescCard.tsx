import { classNames } from 'shared/libs/classNames/classNames';
import { Card, Padding } from 'shared/ui/Card/Card';
import { useStore } from 'store/store';
import { observer } from 'mobx-react-lite';
import { List } from 'store/types/types';
import '../../app/styles/index.scss';
import {
    formatDay,
    formatDayOfWeek,
    tempt,
} from 'shared/libs/convertData/convertData';
import { isMobile } from 'react-device-detect';
import WeatherIcon from '../../shared/assets/icons/coudy.svg';
import cls from './WeekDayDescCard.module.scss';

interface WeekDayDescCardProps {
    className?: string;
    dayData?: List
}

export const WeekDayDescCard = observer(({ className, dayData }: WeekDayDescCardProps) => {
    const { valueStore } = useStore();
    const { degree } = valueStore;
    return (
        <div className={classNames(cls.WeekDayDescCard, {}, [className])}>
            <Card padding={Padding.NONE}>
                <div className={cls.top}>
                    <div className={cls.day}>{ formatDay(new Date(dayData?.dt_txt)) }</div>
                    <div className={cls.time}>{ formatDayOfWeek(new Date(dayData?.dt_txt)) }</div>

                </div>
                <div className={cls.middle}>
                    <div className={cls.icon}><WeatherIcon /></div>
                </div>
                <div className={cls.bottom}>
                    <div className={cls.container}>
                        <div className={cls.info1}>
                            <p>
                                <span>Temp:</span>
                                { ' ' }
                                { Math.floor(tempt(dayData?.main?.temp, degree)) }
                                °
                                { degree }
                            </p>
                            <p>
                                <span>Real Feel:</span>
                                { Math.floor(tempt(dayData?.main?.feels_like, degree)) }
                                °
                                { degree }
                            </p>
                            <p>
                                <span>Wind:</span>
                                { ' ' }
                                { dayData?.wind?.speed }
                                { ' ' }
                                m/s
                            </p>
                            <p>
                                <span>Pressure:</span>
                                { ' ' }
                                { dayData?.main?.pressure }
                                { ' ' }
                                MB
                            </p>
                            <p>
                                <span>Humidity:</span>
                                { ' ' }
                                { dayData?.main?.humidity }
                                { ' ' }
                                %
                            </p>
                            <p>
                                <span>Ground level:</span>
                                { ' ' }
                                { dayData?.main?.grnd_level }
                                { ' ' }
                                hPa
                            </p>
                        </div>
                        <div className={isMobile ? cls.info2_m : cls.info2}>
                            <p>
                                <span>Weather:</span>
                                { dayData?.weather?.[0]?.main }
                            </p>
                            <p>
                                <span>Desc:</span>
                                { dayData?.weather?.[0]?.description }
                            </p>
                        </div>
                    </div>

                </div>
            </Card>
        </div>
    );
});
