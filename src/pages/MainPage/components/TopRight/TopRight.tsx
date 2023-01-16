import cls from './TopRight.module.scss'
import {memo} from 'react';
import {classNames} from 'shared/libs/classNames/classNames';
import {Progress} from 'shared/ui/Progress/Progress';
import {List, Rain} from 'store/types/types';
import {observer} from 'mobx-react-lite';
import {formatAMPM, formatDay} from 'shared/libs/convertData/convertData';


interface TopRightProps {
    className?: string;
    rainChance?: Rain[];
    week?: List[];
    hourly?: List[];
}

export const TopRight = observer(({className, rainChance, hourly, week}: TopRightProps) => {

    return (
        <div className={classNames(cls.TopRight, {}, [className])}>
            <div className={cls.container}>
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