import { classNames } from 'shared/libs/classNames/classNames';
import { OtherCitiesCard } from 'features/OtherCitiesCard/OtherCitiesCard';
import { getSearchCity } from 'shared/libs/helpers/getData';
import { localStorageSave } from 'shared/libs/helpers/localStorage';
import { useStore } from 'store/store';
import { observer } from 'mobx-react-lite';
import { isMobile } from 'react-device-detect';
import cls from './SearchHistory.module.scss';

interface SearchHistoryProps {
    className?: string;
}

export const SearchHistory = observer(({ className }: SearchHistoryProps) => {
    const { dataStore } = useStore();
    const { city } = dataStore;
    const { today } = dataStore;
    const currentLocation = dataStore.location;

    const searchedCity = getSearchCity(today, city?.name, currentLocation);
    const searchHistory = localStorageSave(searchedCity);

    return (
        <div className={classNames(isMobile ? cls.SearchHistory_m : cls.SearchHistory, {}, [className])}>
            { searchHistory.map((city: any) => (
                <OtherCitiesCard
                    key={city?.city}
                    name={city?.city}
                    temp={city?.temp}
                    weather={city?.weather}
                    className={cls.btn}
                />
            )) }
        </div>
    );
});
