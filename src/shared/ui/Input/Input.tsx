import React, {InputHTMLAttributes, memo, useCallback} from 'react';
import cls from './Input.module.scss';
import {classNames, Mods} from '../../libs/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'| 'readOnly'>

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    placeholder?: string,
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        ...otherProps
    } = props;

    const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    },[onChange]);


    return (
        <div className={classNames(cls.Input, {}, [className])}>
            <input
                className={cls.input}
                type={type}
                value={value}
                onChange={onChangeHandler}
                placeholder={placeholder}
                {...otherProps}
            />
        </div>
    );
});
