import cls from './TopRight.module.scss'
import {memo} from 'react';
import {classNames} from "../../../../shared/libs/classNames/classNames";
import {Progress} from "../../../../shared/ui/Progress/Progress";


interface TopRightProps {
    className?: string;
}

export const TopRight = memo(({className}: TopRightProps) => {


    const days = [0, 1, 2, 3, 4]
    return (
        <div className={classNames(cls.TopRight, {}, [className])}>
            <div className={cls.container}>
                <p className={cls.title}>Rain chance</p>
                <div className={cls.data}>
                    {days.map((day) =>
                        <Progress key={day} value={0.5} day={'Feb 24'}/>
                    )}
                </div>
            </div>
        </div>
    );
});