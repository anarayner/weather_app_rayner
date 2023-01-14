import cls from './Progress.module.scss'
import {memo} from 'react';
import {classNames} from "../../libs/classNames/classNames";


interface ProgressProps {
    className?: string;
    value: number;
    day?: string | number;

}

export const Progress = memo((props: ProgressProps) => {
    const {
        className,
        value,
        day
    } = props

    return (
        <div className={classNames(cls.Progress, {}, [className])}>
            <div>{day}</div>
            <progress value={value} className={cls.progress} />
            <div>{value*100}%</div>
        </div>
    );
});