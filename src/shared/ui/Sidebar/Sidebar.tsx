import cls from './Sidebar.module.scss'
import {memo} from 'react';
import {classNames} from "../../libs/classNames/classNames";
import {ThemeSwitcher} from "../../../widgets/ThemeSwitcher";


interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({className}: SidebarProps) => {
    const a = 0

    return (
        <div className={classNames(cls.Sidebar, {}, [className])}>
            <div className={cls.switcher}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
});