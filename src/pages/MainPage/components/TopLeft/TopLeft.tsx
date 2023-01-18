import { useCallback, useState } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { Clock, ClockSize } from 'shared/ui/Clock/Clock';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { CurrentDayCard } from 'features/CurrentDayCard/CurrentDayCard';
import { WeekDayCard } from 'features/WeekDayCard/WeekDayCard';
import { WeekDayDescCard } from 'features/WeekDayDescCard/WeekDayDescCard';
import { Modal } from 'shared/ui/Modal/Modal';
import { observer } from 'mobx-react-lite';
import { useStore } from 'store/store';
import { isMobile } from 'react-device-detect';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { SearchHistory } from 'features/SearchHistory/SearchHistory';
import cls from './TopLeft.module.scss';

interface TopLeftProps {
    className?: string;
}

export const TopLeft = observer(({ className }: TopLeftProps) => {
    const { dataStore, valueStore } = useStore();

    const week = dataStore.weekDays;
    const { hourly } = dataStore;
    const { degree } = valueStore;

    const [isOpened, setIsOpened] = useState(false);
    const [activeObject, setActiveObject] = useState(null);
    const [degreeBtn, setDegreeBth] = useState(degree);

    const [isOpen, setIsOpen] = useState(false);

    const degreeBtnSnow = degreeBtn === 'F' ? 'C' : 'F';

    const close = useCallback(() => setIsOpened(false), []);

    const onClickHandler = useCallback(() => {
        valueStore.changeDegree(degreeBtn);
        return degree === 'F' ? setDegreeBth('C') : setDegreeBth('F');
    }, [degree, degreeBtn, valueStore]);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <div className={classNames('', {}, [className])}>
            <div className={isMobile ? cls.date_m : cls.date}>
                <Clock size={isMobile ? ClockSize.S : ClockSize.L} />
                <div className={cls.btn_container}>
                    <Button
                        size={ButtonSize.S}
                        className={cls.btn}
                        onClick={onClickHandler}
                    >
                        { degreeBtnSnow }
                        °
                    </Button>
                    { isMobile
                        ? (
                            <Button
                                size={ButtonSize.S}
                                onClick={onOpenDrawer}
                            >
                                Search History
                            </Button>
                        ) : null }
                </div>
            </div>
            <div className={isMobile ? cls.weather_container_m : cls.weather_container}>
                <CurrentDayCard />
                <div className={isMobile ? cls.days_m : cls.days}>
                    { hourly.map((day) => (
                        <Button
                            key={day?.dt}
                            theme={ButtonTheme.CLEAR}
                            onClick={() => {
                                setIsOpened(true);
                                setActiveObject(day);
                            }}
                        >
                            <WeekDayCard key={day?.dt} time={day?.dt_txt} degree={day?.main?.temp} />
                        </Button>
                    )) }
                    { week.map((day) => (
                        <Button
                            key={day?.dt}
                            theme={ButtonTheme.CLEAR}
                            onClick={() => {
                                setIsOpened(true);
                                setActiveObject(day);
                            }}
                        >
                            <WeekDayCard date={day?.dt_txt} degree={day?.main?.temp} />
                        </Button>
                    )) }
                </div>
            </div>
            <Modal isOpen={isOpened} onClose={close} lazy>
                <WeekDayDescCard dayData={activeObject} />
            </Modal>
            <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                <SearchHistory />
            </Drawer>
        </div>
    );
});
