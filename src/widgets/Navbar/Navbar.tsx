import cls from './Navbar.module.scss'
import {classNames} from 'shared/libs/classNames/classNames';
import {Input} from 'shared/ui/Input/Input';
import LocationIcon from 'shared/assets/icons/location.svg'
import {observer} from 'mobx-react-lite';
import {useStore} from 'store/store';
import React, {useCallback, useState} from 'react';
import {Simulate} from 'react-dom/test-utils';
import input = Simulate.input;

interface NavbarProps {
    className?: string;
}

export const Navbar = 
    observer(({className}: NavbarProps) => {
        const { dataStore } = useStore();
        const currentLocation = dataStore.location

        const [location, setLocation] = useState('')

        const handleKeyPress = useCallback((event: React.KeyboardEvent<HTMLElement>) => {
            if(event.key == 'Enter'){
                event.preventDefault()
                dataStore.fetchCurrentWeather(location)
                setLocation('')
            }
        },[dataStore, location]);

        
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.location}>
                    <LocationIcon className={cls.icon}/>
                    <div className={cls.city}>{ currentLocation }</div>
                </div>

                <Input
                    className={cls.input}
                    placeholder={'Search city...'}
                    onChange={(e) => setLocation(e)}
                    onKeyPress={handleKeyPress}
                    value={location}
                />
            </div>
        );
    });