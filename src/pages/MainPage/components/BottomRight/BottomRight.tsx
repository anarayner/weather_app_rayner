import cls from './ButtomRight.module.scss'
import {memo} from 'react';
import {classNames} from '../../../../shared/libs/classNames/classNames';
import {Button} from '../../../../shared/ui/Button';
import {ButtonSize} from '../../../../shared/ui/Button/Button';
import {OtherCitiesCard} from '../../../../features/OtherCitiesCard/OtherCitiesCard';
import {SearchHistory} from '../../../../store/types/types';
import {WeekDayCard} from '../../../../features/WeekDayCard/WeekDayCard';
import {observer} from 'mobx-react-lite';


interface BottomRightProps {
    className?: string;
    searchHistory?: SearchHistory[]
}

export const BottomRight = observer(({className, searchHistory}: BottomRightProps) => {

    return (
        <div className={classNames(cls.BottomRight, {}, [className])}>
            <div className={cls.container}>
                <div className={cls.button_container}>
                    <Button size={ButtonSize.S}>Search History</Button>
                    { /*<Button size={ButtonSize.S} className={cls.btn}>Other cities</Button>*/ }
                </div>
                { /*<div className={cls.cards_cont}>*/ }
                { /*    <OtherCitiesCard/>*/ }
                { /*</div>*/ }
                <div className={cls.cards_cont}>
                    { searchHistory.map((city) =>
                        <OtherCitiesCard key={city?.city} name={city?.city} temp={city?.temp} weather={city?.weather}/>
                    ) }
                </div>
            </div>
        </div>
    );
});