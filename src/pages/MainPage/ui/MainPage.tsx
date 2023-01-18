import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from 'store/store';
import { useGeoLocation } from 'shared/libs/hooks/useGeolocation';
import { MainPageContent } from 'pages/MainPage/components/MainPageContent/MainPageContent';
import 'app/styles/index.scss';

const MainPage = observer(() => {
    const { dataStore } = useStore();
    const location = useGeoLocation();

    useEffect(() => {
        if (location.loaded) {
            dataStore.fetchCurrentWeather('', location.coordinates.lat, location.coordinates.lng);
        }
    }, [dataStore, location.coordinates.lat, location.coordinates.lng, location.loaded]);

    return (
        <MainPageContent />
    );
});

export default MainPage;
