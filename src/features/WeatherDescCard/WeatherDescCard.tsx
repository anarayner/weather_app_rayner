import cls from './WeatherDescCard.module.scss'
import {classNames} from "../../shared/libs/classNames/classNames";
import {Card, Padding} from "../../shared/ui/Card/Card";
import WeatherIcon from '../../shared/assets/icons/coudy_small.svg'
import {observer} from "mobx-react-lite";


interface WeatherDescCardProps {
    className?: string;
    city?: string;
    title?: string;
    description?: string;
    value?: string;
    icon?: string;
}

export const WeatherDescCard = observer(({className}: WeatherDescCardProps) => {

    const a = 6
    return (
        <div className={classNames(cls.WeatherDescCard, {}, [className])}>
            <Card padding={Padding.NONE} className={cls.content}>
                <div className={cls.icon}>{<WeatherIcon/>}</div>
                <div>
                    <p className={cls.title}>New York</p>
                    <p className={cls.value}>73</p>
                </div>
            </Card>
        </div>
    );
});