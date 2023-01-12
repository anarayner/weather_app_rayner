import cls from './Navbar.module.scss'
import {memo} from 'react';
import {classNames} from "../../shared/libs/classNames/classNames";
import {Input} from "../../shared/ui/Input/Input";
import LocationIcon from "../../shared/assets/icons/location.svg"


interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.location}>
                <LocationIcon />
                <div className={cls.city}>Chattanooga</div>
            </div>

            <Input className={cls.input} placeholder={"Search city..."}/>
        </div>
    );
});