import cls from './TopRight.module.scss'
import {memo} from 'react';
import {classNames} from "../../../../shared/libs/classNames/classNames";
import {Progress} from "../../../../shared/ui/Progress/Progress";
import {Rain} from "../../../../store/types/types";
import {observer} from "mobx-react-lite";


interface TopRightProps {
    className?: string;
    rainChance?: Rain[]
}

export const TopRight = observer(({className, rainChance}: TopRightProps) => {


    const days = [0, 1]
    return (
        <div className={classNames(cls.TopRight, {}, [className])}>
            <div className={cls.container}>
                <p className={cls.title}>Rain chance</p>
                <div className={cls.data}>
                    {rainChance.map((day) =>
                        <Progress key={day.date} value={day.rainChance} day={'Feb 24'}/>
                    )}
                </div>
            </div>
        </div>
    );
});