import { HTMLAttributes, memo, ReactNode } from 'react';
import cls from './Card.module.scss';
import {classNames} from "../../libs/classNames/classNames";

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

export const enum Padding {
    NONE = 'padding_0',
    S = 'padding_10',
    M = 'padding_20',

}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    padding?: Padding;
    max?: boolean;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        padding = Padding.M,
        max,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.Card, { [cls.max]: max }, [className, cls[theme], cls[padding]])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
