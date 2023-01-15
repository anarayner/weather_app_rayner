import cls from './BottomLeft.module.scss'
import {classNames} from "../../../../shared/libs/classNames/classNames";
import {WeatherDescCard} from "../../../../features/WeatherDescCard/WeatherDescCard";
import {observer} from "mobx-react-lite";
import {City, List} from "../../../../store/types/types";
import FeelLike from '../../../../shared/assets/icons/temperature.svg'
import WindSpeed from '../../../../shared/assets/icons/wind.svg'
import WindDir from '../../../../shared/assets/icons/wind-ne.svg'
import Rain from '../../../../shared/assets/icons/rain.svg'
import Cloud from '../../../../shared/assets/icons/cloud.svg'
import Pressure from '../../../../shared/assets/icons/pressure.svg'
import Humidity from '../../../../shared/assets/icons/humidity.svg'
import Level from '../../../../shared/assets/icons/level-slider.svg'
import Sunrise from '../../../../shared/assets/icons/sunrise.svg'
import {tempt} from "../../../../shared/libs/convertData/convertData";


export const enum Title {
    FEELS_LIKE = 'Feels like',
    WIND_SPEED = 'Wind speed',
    WIND_DIR = 'Wind direction',
    RAIN = 'Rain',
    CLOUD = 'Cloud',
    PRESSURE = 'Pressure',
    HUMIDITY = 'Humidity',
    GRND_LEVER = 'Ground level',
    WIND_GUST = 'Wind gust',
    SUNSET = 'backgroundRound'
}

interface BottomLeftProps {
    className?: string;
    city?: City;
    today?: List;
}

export const BottomLeft = observer((props: BottomLeftProps) => {
    const {
        className,
        today,
        city,
    } = props;
    if(!today?.main?.temp){
        return (<div>Loading..</div>)
    }
    return (
        <div className={classNames(cls.BottomLeft, {}, [className])}>
            <div className={cls.card_grid}>
                {/*<p className={cls.title}>Today overview</p>*/}
                <div className={cls.div1}>
                    <WeatherDescCard title={Title.FEELS_LIKE}
                        icon={<FeelLike/>}
                        value={Math.floor(tempt(today?.main?.temp, 'F'))+'°F'}
                    />
                </div>
                <div className={cls.div2}>
                    <WeatherDescCard
                        title={Title.WIND_SPEED}
                        icon={<WindSpeed/>}
                        value={today?.wind?.speed+' m/s'}
                    />
                </div>
                <div className={cls.div3}>
                    <WeatherDescCard
                        title={Title.WIND_DIR}
                        icon={<WindDir/>}
                        value={today?.wind?.deg+'°'}
                    />
                </div>
                <div className={cls.div4}>
                    <WeatherDescCard
                        title={Title.RAIN}
                        icon={<Rain/>}
                    />
                </div>
                <div className={cls.div5}>
                    <WeatherDescCard
                        title={Title.CLOUD}
                        icon={<Cloud/>}
                        value={today?.clouds?.all+" %"}
                    />
                </div>
                <div className={cls.div6}>
                    <WeatherDescCard
                        title={Title.PRESSURE}
                        icon={<Pressure/>}
                        value={today?.main?.pressure+' hPa'}
                    />
                </div>
                <div className={cls.div7}>
                    <WeatherDescCard
                        title={Title.HUMIDITY}
                        icon={<Humidity/>}
                        value={today?.main?.humidity+' %'}
                    />
                </div>
                <div className={cls.div8}>
                    <WeatherDescCard
                        title={Title.GRND_LEVER}
                        icon={<Level/>}
                        value={today?.main?.grnd_level+' hPa'}
                    />
                </div>
                <div className={cls.div9}>
                    <WeatherDescCard
                        title={Title.WIND_GUST}
                        icon={<Sunrise/>}
                        value={today?.wind?.gust+' m/s'}
                    />
                </div>
            </div>
        </div>
    );
});