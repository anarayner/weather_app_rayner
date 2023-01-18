import { memo } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { observer } from 'mobx-react-lite';
import { SearchHistory } from 'features/SearchHistory/SearchHistory';
import cls from './ButtomRight.module.scss';

interface BottomRightProps {
    className?: string;
}

export const BottomRight = observer(({ className }: BottomRightProps) => (
    <div className={classNames(cls.BottomRight, {}, [className])}>
        <div className={cls.container}>
            <div className={cls.button_container}>
                <p className={cls.title}>Search History</p>
            </div>
            <SearchHistory />
        </div>
    </div>
));
