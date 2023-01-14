import cls from './Sidebar.module.scss'
import {memo} from 'react';
import {classNames} from "../../shared/libs/classNames/classNames";
import {ThemeSwitcher} from "../ThemeSwitcher";
import {Button} from "../../shared/ui/Button";
import {ButtonTheme} from "../../shared/ui/Button/Button";
import HomeIcon from "../../shared/assets/icons/main-20-20.svg";
import CalendarIcon from "../../shared/assets/icons/calendar.svg";
import MapIcon from "../../shared/assets/icons/location_large.svg";
import { useNavigate } from "react-router-dom";
import {RoutePath} from "../../app/providers/router/config/routeConfig";

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({className}: SidebarProps) => {
    const navigate = useNavigate();

    return (
        <div className={classNames(cls.Sidebar, {}, [className])}>
            <div className={cls.sidebar_btn}>
                <Button
                    onClick={()=>navigate(RoutePath.main)}
                    theme={ButtonTheme.BACKGROUND_ROUND}
                >
                    {<HomeIcon className={cls.icon}/> }
                </Button>
                <Button
                    onClick={()=>navigate(RoutePath.calendar)}
                    theme={ButtonTheme.BACKGROUND_ROUND}
                    className={cls.btn}
                >
                    {<CalendarIcon/> }
                </Button>
                <Button
                    onClick={()=>navigate(RoutePath.map)}
                    theme={ButtonTheme.BACKGROUND_ROUND}
                    className={cls.btn}
                >
                    {<MapIcon className={cls.icon}/> }
                </Button>
            </div>

            <div className={cls.switcher}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
});