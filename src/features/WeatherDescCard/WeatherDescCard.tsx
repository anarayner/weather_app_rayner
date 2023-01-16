import cls from './WeatherDescCard.module.scss'
import {classNames} from 'shared/libs/classNames/classNames';
import {Card, Padding} from 'shared/ui/Card/Card';
import {observer} from 'mobx-react-lite';


interface WeatherDescCardProps {
    className?: string;
    title?: string;
    value?: string | number;
    icon?: any;
}

export const WeatherDescCard = observer((props: WeatherDescCardProps) => {

    const {
        className,
        title,
        icon,
        value,
    } = props
    return (
        <div className={classNames(cls.WeatherDescCard, {}, [className])}>
            <Card padding={Padding.NONE} className={cls.content}>
                <div className={cls.icon}>{ icon }</div>
                <div className={cls.info}>
                    <p className={cls.title}>{ title }</p>
                    <p className={cls.value}>{ value }</p>
                </div>
            </Card>
        </div>
    );
});