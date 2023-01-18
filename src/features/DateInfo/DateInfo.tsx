import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { isMobile } from 'react-device-detect';
import { Clock, ClockSize } from 'shared/ui/Clock/Clock';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import { useStore } from 'store/store';
import { SearchHistory } from 'features/SearchHistory/SearchHistory';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import cls from './DateInfo.module.scss';

interface DateInfoProps {
    className?: string;
}

export const DateInfo = memo(({ className }: DateInfoProps) => {
    const { valueStore } = useStore();

    const { degree } = valueStore;
    const [degreeBtn, setDegreeBth] = useState(degree);
    const degreeBtnSnow = degreeBtn === 'F' ? 'C' : 'F';

    const [isOpenDrawer, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onChangeDegree = useCallback(() => {
        valueStore.changeDegree(degreeBtn);
        return degree === 'F' ? setDegreeBth('C') : setDegreeBth('F');
    }, [degree, degreeBtn, valueStore]);

    return (
        <div className={classNames(cls.DateInfo, {}, [className])}>
            <div className={isMobile ? cls.date_m : cls.date}>
                <Clock size={isMobile ? ClockSize.S : ClockSize.L} />
                <div className={cls.btn_container}>
                    <Button
                        size={ButtonSize.S}
                        className={cls.btn}
                        onClick={onChangeDegree}
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
            <Drawer isOpen={isOpenDrawer} onClose={onCloseDrawer}>
                <SearchHistory />
            </Drawer>
        </div>
    );
});
