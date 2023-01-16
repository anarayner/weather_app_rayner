import cls from './TopRight.module.scss'
import {classNames} from 'shared/libs/classNames/classNames';
import {Progress} from 'shared/ui/Progress/Progress';
import {observer} from 'mobx-react-lite';
import {formatAMPM, formatDay} from 'shared/libs/convertData/convertData';
import {useStore} from 'store/store';
import {isMobile} from 'react-device-detect';


interface TopRightProps {
    className?: string;
}

export const TopRight = observer(({className}: TopRightProps) => {
    const { dataStore } = useStore();

    const week = dataStore.weekDays
    const hourly = dataStore.hourly

    return (
        <div className={classNames(cls.TopRight, {}, [className])}>
            <div className={isMobile? cls.container_m : cls.container}>
                <p className={cls.title}>Cloud, %</p>
                <div className={cls.data}>
                    { hourly.map((day) =>
                        <Progress key={day.dt} value={day.clouds.all} day={formatAMPM(new Date(day.dt_txt))}/>
                    ) }
                    { week.map((day) =>
                        <Progress key={day.dt} value={day.clouds.all} day={formatDay(new Date(day.dt_txt))}/>
                    ) }
                </div>
            </div>
        </div>
    );
});