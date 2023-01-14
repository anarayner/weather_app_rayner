import cls from './Grid.module.scss'
import {memo, ReactNode} from 'react';
import {classNames} from "../../../../shared/libs/classNames/classNames";
import {Container} from "../../../../shared/ui/Container/Container";

export const enum ContainerGridTheme {
    R2C2  = 'grid_2_1'
}
interface GridProps {
    className?: string;
    top_left?: ReactNode;
    top_right?: ReactNode;
    bottom_left?: ReactNode;
    bottom_right?: ReactNode;
    grid?: ContainerGridTheme;
}

export const Grid = memo(({className, grid, top_left, top_right, bottom_left, bottom_right}: GridProps) => {

    return (
        <Container className={classNames(cls.Grid, {}, [className, cls[grid]])}>
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
        </Container>
    );
});