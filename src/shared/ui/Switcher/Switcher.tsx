import cls from './Switcher.module.scss'
import {memo} from 'react';
import {classNames} from '../../libs/classNames/classNames';


interface SwitcherProps {
    className?: string;
}

export const Switcher = memo(({className}: SwitcherProps) => {

    return (
        <div className={classNames(cls.Switcher, {}, [className])}>
            <label className={cls.switch}>
                <input type={cls.checkbox}/>
                <span className="slider round"></span>
            </label>
        </div>
    );
});