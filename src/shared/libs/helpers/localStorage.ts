import { SearchedCity } from 'store/types/types';

export const localStorageSave = (searchObject: SearchedCity) => {
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    console.log('searchHistory', searchHistory);
    const hasSearch = searchHistory.some((d:any) => d?.city === searchObject?.city);
    console.log('hasSearch', hasSearch);

    if (searchObject && !hasSearch) {
        searchHistory.unshift(searchObject);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }
    return searchHistory;
};
