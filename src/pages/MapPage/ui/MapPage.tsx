import React, {useState} from 'react'
import {Container} from '../../../shared/ui/Container/Container';
import {Modal} from '../../../shared/ui/Modal/Modal';
import {Button} from '../../../shared/ui/Button';
import {Progress} from '../../../shared/ui/Progress/Progress';
import {CurrentDayCard} from '../../../features/CurrentDayCard/CurrentDayCard';
import {WeekDayDescCard} from '../../../features/WeekDayDescCard/WeekDayDescCard';
import cls from '../../AboutPage/ui/del.module.scss';

const MapPage = () => {
    const [isOpened, setIsOpened] = useState(false)

    return (
        <div className={cls.wrap} id="fullheight">
            Comming soon..
        </div>
    )
}

export default MapPage