import React, { memo } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { BottomLeft } from 'pages/MainPage/components/BottomLeft/BottomLeft';
import { BottomRight } from 'pages/MainPage/components/BottomRight/BottomRight';
import { isMobile } from 'react-device-detect';
import { TopLeft } from 'pages/MainPage/components/TopLeft/TopLeft';
import { TopRight } from 'pages/MainPage/components/TopRight/TopRight';
import { Loader } from 'shared/ui/Loader/Loader';
import { useStore } from 'store/store';
import { observer } from 'mobx-react-lite';
import cls from './MainPageContent.module.scss';

interface MainPageContentProps {
    className?: string;
}

export const MainPageContent = observer(({ className }: MainPageContentProps) => {
    const { dataStore } = useStore();
    const { today } = dataStore;

    const content = (
        <>
            <div className={isMobile ? cls.d1_m : cls.d1}><TopLeft /></div>
            <div className={isMobile ? cls.d2_m : cls.d2}><TopRight /></div>
        </>
    );

    if (!today?.main?.temp) {
        return (<div className="loader"><Loader /></div>);
    }

    if (isMobile) {
        return (
            <div className={cls.wrapper_mobile}>{ content }</div>
        );
    }

    return (
        <div className={classNames(cls.wrapper, {}, [className])} id="fullheight">
            <div className={cls.top}>
                { content }
            </div>
            <div className={cls.bottom}>
                <div className={cls.d3}>
                    <BottomLeft />
                </div>
                <div className={cls.d4}>
                    <BottomRight />
                </div>
            </div>
        </div>
    );
});
