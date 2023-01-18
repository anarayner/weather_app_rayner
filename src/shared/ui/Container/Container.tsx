import { memo, ReactNode } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import cls from './Container.module.scss';

interface ContainerProps {
    className?: string;
    children?: ReactNode;
}

export const Container = memo(({ className, children }: ContainerProps) => (
    <div className={classNames(cls.Container, {}, [className])}>
        { children }
    </div>
));
