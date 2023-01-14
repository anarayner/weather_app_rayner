import cls from './OtherCitiesCard.module.scss'
import {classNames} from "../../shared/libs/classNames/classNames";
import {Card, Padding} from "../../shared/ui/Card/Card";
import WeatherIcon from '../../shared/assets/icons/coudy_small.svg'
import {observer} from "mobx-react-lite";


interface OtherCitiesCardProps {
    className?: string;
    city?: string
}

export const OtherCitiesCard = observer(({className}: OtherCitiesCardProps) => {
    return (
        <div className={classNames(cls.CurrentDay, {}, [className])}>
            <Card padding={Padding.NONE}>
                <div className={cls.top}>
                    <p>New York</p>
                    <div className={cls.icon}>{<WeatherIcon/>}</div>
                </div>
                <div className={cls.bottom}>
                    <p>Mostly Sunny</p>
                    <span>72°</span>
                </div>
            </Card>
        </div>
    );
});