import cls from './OtherCitiesCard.module.scss'
import {classNames} from "../../shared/libs/classNames/classNames";
import {Card, Padding} from "../../shared/ui/Card/Card";
import WeatherIcon from '../../shared/assets/icons/coudy_small.svg'
import {observer} from "mobx-react-lite";
import {tempt} from "../../shared/libs/convertData/convertData";


interface OtherCitiesCardProps {
    className?: string;
    name?: string;
    temp?: number;
    weather?: string
}

export const OtherCitiesCard = observer((props: OtherCitiesCardProps) => {
    const {
        className,
        name,
        weather,
        temp
    } = props
    return (
        <div className={classNames(cls.CurrentDay, {}, [className])}>
            <Card padding={Padding.NONE}>
                <div className={cls.top}>
                    <p>{name}</p>
                    <div className={cls.icon}>{<WeatherIcon/>}</div>
                </div>
                <div className={cls.bottom}>
                    <p>{weather}</p>
                    <span>{Math.floor(tempt(temp, 'F'))}°F</span>
                </div>
            </Card>
        </div>
    );
});