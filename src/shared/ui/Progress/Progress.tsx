import cls from './Progress.module.scss'
import {memo} from 'react';
import {classNames} from 'shared/libs/classNames/classNames';


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
            <span>{ day }</span>
            <progress value={value/100} className={cls.progress} />
            <span className={cls.pros}>{ value }%</span>
        </div>
    );
});