import { ButtonHTMLAttributes, memo, ReactNode } from 'react'
import cls from './Button.module.scss'
import {classNames, Mods} from '../../libs/classNames/classNames';

export const enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_ROUND = 'backgroundRound'
}

export const enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
    children?: ReactNode
    fullWidth?: boolean
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        onClick,
        theme = ButtonTheme.OUTLINE,
        square,
        disabled,
        size = ButtonSize.M,
        fullWidth,
        ...otherProps
    } = props

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth
    }
    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
            onClick={onClick}
            disabled={disabled}
            {...otherProps}
        >
            { children }
        </button>
    )
})
