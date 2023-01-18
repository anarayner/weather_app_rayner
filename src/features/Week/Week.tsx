import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { isMobile } from 'react-device-detect';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { WeekDayCard } from 'features/WeekDayCard/WeekDayCard';
import { Modal } from 'shared/ui/Modal/Modal';
import { WeekDayInfo } from 'features/WeekDayInfo/WeekDayInfo';
import { useStore } from 'store/store';
import { observer } from 'mobx-react-lite';
import cls from './Week.module.scss';

interface WeekProps {
    className?: string;
}

export const Week = observer(({ className }: WeekProps) => {
    const { dataStore, valueStore } = useStore();
    const { hourly } = dataStore;
    const { degree } = valueStore;
    const week = dataStore.weekDays;

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [activeObject, setActiveObject] = useState(null);

    const onCloseModal = useCallback(() => {
        setIsOpenModal(false);
    }, []);

    return (
        <div className={classNames(cls.Week, {}, [className])}>
            <div className={isMobile ? cls.days_m : cls.days}>
                { hourly.map((day) => (
                    <Button
                        key={day?.dt}
                        theme={ButtonTheme.CLEAR}
                        onClick={() => {
                            setIsOpenModal(true);
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
                            setIsOpenModal(true);
                            setActiveObject(day);
                        }}
                    >
                        <WeekDayCard date={day?.dt_txt} degree={day?.main?.temp} />
                    </Button>
                )) }
            </div>
            <Modal isOpen={isOpenModal} onClose={onCloseModal} lazy>
                <WeekDayInfo dayData={activeObject} />
            </Modal>
        </div>
    );
});
