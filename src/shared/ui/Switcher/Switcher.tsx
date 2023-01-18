import { memo } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import cls from './Switcher.module.scss';

interface SwitcherProps {
    className?: string;
}

export const Switcher = memo(({ className }: SwitcherProps) => (
    <div className={classNames(cls.Switcher, {}, [className])}>
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label className={cls.switch}>
            <input type={cls.checkbox} />
            <span className="slider round" />
        </label>
    </div>
));
