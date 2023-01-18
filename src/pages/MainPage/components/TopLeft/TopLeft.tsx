import { classNames } from 'shared/libs/classNames/classNames';
import { CurrentDay } from 'features/CurrentDay/CurrentDay';
import { observer } from 'mobx-react-lite';
import { isMobile } from 'react-device-detect';
import { Week } from 'features/Week/Week';
import { DateInfo } from 'features/DateInfo/DateInfo';
import cls from './TopLeft.module.scss';

interface TopLeftProps {
    className?: string;
}

export const TopLeft = observer(({ className }: TopLeftProps) => (
    <div className={classNames('', {}, [className])}>
        <DateInfo />
        <div className={isMobile ? cls.weather_container_m : cls.weather_container}>
            <CurrentDay />
            <Week />
        </div>
    </div>
));
