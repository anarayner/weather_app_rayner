import cls from './WeekDayCard.module.scss'
import {classNames} from "../../shared/libs/classNames/classNames";
import {useStore} from "../../store/store";
import {Card, Padding} from "../../shared/ui/Card/Card";
import WeatherIcon from '../../shared/assets/icons/coudy.svg'
import {observer} from "mobx-react-lite";
import {Loader} from "../../shared/ui/Loader/Loader";
import {CurrentWeather} from "../../store/types/types";
import {Button} from "../../shared/ui/Button";
import {ButtonTheme} from "../../shared/ui/Button/Button";
import {WeekDayDescCard} from "../WeekDayDescCard/WeekDayDescCard";
import {Modal} from "../../shared/ui/Modal/Modal";
import {useState} from "react";


interface WeekDayCardProps {
    className?: string;
    data?: CurrentWeather
}

export const WeekDayCard = observer(({className, data}: WeekDayCardProps) => {
    const { dataStore } = useStore();
    const [isOpened, setIsOpened] = useState(false)

    const current = dataStore.currentWeather
    // console.log(dataStore.currentWeather?.base)

    if(!dataStore.currentWeather){
        return (<Loader/>)
    } else return (
        <>
            <div className={classNames(cls.CurrentDay, {}, [className])}>
                <Button theme={ButtonTheme.CLEAR} onClick={()=> setIsOpened(true)}>
                    <div className={cls.top}>
                        <div className={cls.time}>Tue</div>
                    </div>
                    <div className={cls.middle}>
                        <div className={cls.icon}>{<WeatherIcon/>}</div>
                    </div>
                    <div className={cls.bottom}>
                        <span>72°</span>
                    </div>
                </Button>
            </div>
            <Modal isOpen={isOpened} onClose={()=> setIsOpened(false)}>
                <WeekDayDescCard/>
            </Modal>
        </>
    );
});