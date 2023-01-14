import cls from './ButtomRight.module.scss'
import {memo} from 'react';
import {classNames} from "../../../../shared/libs/classNames/classNames";
import {Button} from "../../../../shared/ui/Button";
import {ButtonSize} from "../../../../shared/ui/Button/Button";
import {OtherCitiesCard} from "../../../../features/OtherCitiesCard/OtherCitiesCard";


interface BottomRightProps {
    className?: string;
}

export const BottomRight = memo(({className}: BottomRightProps) => {

    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.button_container}>
                <Button size={ButtonSize.S}>Other cities</Button>
                <Button size={ButtonSize.S} className={cls.btn}>Search History</Button>
            </div>
            <div className={cls.cards_cont}>
                <OtherCitiesCard/>
                <OtherCitiesCard/>
                <OtherCitiesCard/>
                <OtherCitiesCard/>
                <OtherCitiesCard/>
                <OtherCitiesCard/>
            </div>
        </div>
    );
});