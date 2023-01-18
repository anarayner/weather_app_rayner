import { classNames } from 'shared/libs/classNames/classNames';
import { TodayInfoCard } from 'features/TodayInfoCard/TodayInfoCard';
import { observer } from 'mobx-react-lite';
import FeelLike from 'shared/assets/icons/temperature.svg';
import WindSpeed from 'shared/assets/icons/wind.svg';
import WindDir from 'shared/assets/icons/wind-ne.svg';
import Rain from 'shared/assets/icons/rain.svg';
import Cloud from 'shared/assets/icons/cloud.svg';
import Pressure from 'shared/assets/icons/pressure.svg';
import Humidity from 'shared/assets/icons/humidity.svg';
import Level from 'shared/assets/icons/level-slider.svg';
import Sunrise from 'shared/assets/icons/sunrise.svg';
import { tempt } from 'shared/libs/convertData/convertData';
import { useStore } from 'store/store';
import { Title } from 'shared/consts/consts';
import cls from './BottomLeft.module.scss';

interface BottomLeftProps {
    className?: string;
}

export const BottomLeft = observer(({ className }: BottomLeftProps) => {
    const { dataStore, valueStore } = useStore();

    const { today } = dataStore;
    const { degree } = valueStore;

    if (!today?.main?.temp) {
        return (<div>Loading..</div>);
    }

    return (
        <div className={classNames(cls.BottomLeft, {}, [className])}>
            <div className={cls.card_grid}>
                <div className={cls.div1}>
                    <TodayInfoCard
                        title={Title.FEELS_LIKE}
                        icon={<FeelLike />}
                        value={`${tempt(today?.main?.temp, degree)}°${degree}`}
                    />
                </div>
                <div className={cls.div2}>
                    <TodayInfoCard
                        title={Title.WIND_SPEED}
                        icon={<WindSpeed />}
                        value={`${today?.wind?.speed} m/s`}
                    />
                </div>
                <div className={cls.div3}>
                    <TodayInfoCard
                        title={Title.WIND_DIR}
                        icon={<WindDir />}
                        value={`${today?.wind?.deg}°`}
                    />
                </div>
                <div className={cls.div4}>
                    <TodayInfoCard
                        title={Title.WEATHER}
                        icon={<Rain />}
                        value={today?.weather?.[0]?.main}
                    />
                </div>
                <div className={cls.div5}>
                    <TodayInfoCard
                        title={Title.CLOUD}
                        icon={<Cloud />}
                        value={`${today?.clouds?.all} %`}
                    />
                </div>
                <div className={cls.div6}>
                    <TodayInfoCard
                        title={Title.PRESSURE}
                        icon={<Pressure />}
                        value={`${today?.main?.pressure} hPa`}
                    />
                </div>
                <div className={cls.div7}>
                    <TodayInfoCard
                        title={Title.HUMIDITY}
                        icon={<Humidity />}
                        value={`${today?.main?.humidity} %`}
                    />
                </div>
                <div className={cls.div8}>
                    <TodayInfoCard
                        title={Title.GRND_LEVER}
                        icon={<Level />}
                        value={`${today?.main?.grnd_level} hPa`}
                    />
                </div>
                <div className={cls.div9}>
                    <TodayInfoCard
                        title={Title.WIND_GUST}
                        icon={<Sunrise />}
                        value={`${today?.wind?.gust} m/s`}
                    />
                </div>
            </div>
        </div>
    );
});
