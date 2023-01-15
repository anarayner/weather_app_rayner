import React, {useState} from 'react'
import {Container} from "../../../shared/ui/Container/Container";
import {Modal} from "../../../shared/ui/Modal/Modal";
import {Button} from "../../../shared/ui/Button";
import {Progress} from "../../../shared/ui/Progress/Progress";
import {CurrentDayCard} from "../../../features/CurrentDayCard/CurrentDayCard";
import {WeekDayDescCard} from "../../../features/WeekDayDescCard/WeekDayDescCard";
import cls from './del.module.scss'

const AboutPage = () => {
    const [isOpened, setIsOpened] = useState(false)

    return (
        <div className={cls.wrap} id="fullheight">
            <div className={cls.d3}>
                <div className={cls.top}>
                    <div className={cls.d}>One</div>
                    <div className={cls.d5}>One</div>
                </div>
            </div>
            <div className={cls.d4}>
                <div className={cls.left}>
                    <div className={cls.d2}>One</div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
