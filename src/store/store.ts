import { createContext, useContext } from 'react';
import DataStore from './dataStore';

export interface IStore {
    dataStore: DataStore;

}
export const store: IStore = {
    dataStore: new DataStore(),
};
export const StoreContext = createContext(store);
export const useStore = () => {
    return useContext(StoreContext);
};