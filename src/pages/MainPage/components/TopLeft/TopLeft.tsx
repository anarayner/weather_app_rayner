import cls from './TopLeft.module.scss'
import {memo, useCallback, useState} from 'react';
import {classNames} from 'shared/libs/classNames/classNames';
import {Clock, ClockSize} from 'shared/ui/Clock/Clock';
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button';
import {CurrentDayCard} from 'features/CurrentDayCard/CurrentDayCard';
import {WeekDayCard} from 'features/WeekDayCard/WeekDayCard';
import {City, List} from 'store/types/types';
import {WeekDayDescCard} from 'features/WeekDayDescCard/WeekDayDescCard';
import {Modal} from 'shared/ui/Modal/Modal';
import {observer} from 'mobx-react-lite';
import {useStore} from 'store/store';


interface TopLeftProps {
    className?: string;
    city?: City;
    today?: List;
    week?: List[];
    hourly?: List[]
}

export const TopLeft = observer((props: TopLeftProps) => {
    const {
        className,
        today,
        city,
        week,
        hourly
    } = props

    const { valueStore } = useStore();
    const [isOpened, setIsOpened] = useState(false)
    const [activeObject, setActiveObject] = useState(null);


    const degree = valueStore.degree

    const close = useCallback(()=> setIsOpened(false), []);
    const [degreeBtn, setDegreeBth] = useState(degree)
    const degreeBtnSnow = degreeBtn == 'F'? 'C' : 'F'
    const onClickHandler = useCallback(() => {
        degree =='F'? setDegreeBth('C') : setDegreeBth('F')
        valueStore.changeDegree(degreeBtn)
    }, [degree, degreeBtn, valueStore]);

    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.date}>
                <Clock size={ClockSize.L}/>
                <Button size={ButtonSize.S} className={cls.btn} onClick={onClickHandler}>{ degreeBtnSnow }°</Button>
            </div>
            <div className={cls.weather_container}>
                <CurrentDayCard today={today} city={city}/>
                { hourly.map((day) =>
                    <Button
                        key={day?.dt}
                        theme={ButtonTheme.CLEAR}
                        onClick={()=> {
                            setIsOpened(true)
                            setActiveObject(day);
                        }}>
                        <WeekDayCard key={day?.dt} time={day?.dt_txt} degree={day?.main?.temp}/>
                    </Button>
                ) }
                { week.map((day) =>
                    <Button
                        key={day?.dt}
                        theme={ButtonTheme.CLEAR}
                        onClick={()=> {
                            setIsOpened(true)
                            setActiveObject(day);
                        }}>
                        <WeekDayCard  date={day?.dt_txt} degree={day?.main?.temp}/>
                    </Button>
                ) }
            </div>
            <Modal isOpen={isOpened} onClose={close}>
                <WeekDayDescCard dayData={activeObject} />
            </Modal>
        </div>
    );
});