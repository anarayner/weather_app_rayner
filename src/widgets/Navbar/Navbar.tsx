import cls from './Navbar.module.scss'
import {classNames} from "../../shared/libs/classNames/classNames";
import {Input} from "../../shared/ui/Input/Input";
import LocationIcon from "../../shared/assets/icons/location.svg"
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/store";
import React, {KeyboardEventHandler, useEffect, useState} from "react";

interface NavbarProps {
    className?: string;
}

export const Navbar = 
    observer(({className}: NavbarProps) => {
        const { dataStore } = useStore();
        const currentLocation = dataStore.location

        const [location, setLocation] = useState('')
        console.log(location)

        const handleKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
            if(event.key == "Enter"){
                console.log("PRESS")
                dataStore.fetchCurrentWeather(location)
                localStorage.setItem('search', location);
                console.log("SEARCH", dataStore.currentWeather)
                setLocation('')
            }
        };
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.location}>
                    <LocationIcon className={cls.icon}/>
                    <div className={cls.city}>{currentLocation}</div>
                </div>

                <Input
                    className={cls.input}
                    placeholder={"Search city..."}
                    onChange={(e) => setLocation(e)}
                    onKeyPress={handleKeyPress}
                    value={location}
                />
            </div>
        );
    });