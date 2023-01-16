import cls from './Container.module.scss'
import {memo, ReactNode} from 'react';
import {classNames} from '../../libs/classNames/classNames';


interface ContainerProps {
    className?: string;
    children?: ReactNode;
}

export const Container = memo(({className, children}: ContainerProps) => {
    return (
        <div className={classNames(cls.Container, {}, [className])}>
            { children }
        </div>
    );
});