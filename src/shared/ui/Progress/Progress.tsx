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
            <p>{day}</p>
            <progress value={value/100} className={cls.progress} />
            <span>{value}%</span>
        </div>
    );
});