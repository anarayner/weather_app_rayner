import cls from './Container.module.scss'
import {memo, ReactNode} from 'react';
import {classNames} from "../../libs/classNames/classNames";

export const enum ContainerGridTheme {
    R2C2  = 'grid_2_1'
}
interface ContainerProps {
    className?: string;
    top_left?: ReactNode;
    top_right?: ReactNode;
    bottom_left?: ReactNode;
    bottom_right?: ReactNode;
    grid?: ContainerGridTheme;
}

export const Container = memo(({className, grid, top_left, top_right, bottom_left, bottom_right}: ContainerProps) => {

    return (
        <div className={classNames(cls.Container, {}, [className, cls[grid]])}>
            <div className={cls.div1}>
                {top_left}
            </div>
            <div className={cls.div2}>
                {top_right}
            </div>
            <div className={cls.div3}>
                {bottom_left}
            </div>
            <div className={cls.div4}>
                {bottom_right}
            </div>
        </div>
    );
});