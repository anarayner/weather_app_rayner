import { createContext, useContext } from 'react';
import DataStore from './dataStore';
import ValueStore from './valueStore';

export interface IStore {
    dataStore: DataStore;
    valueStore: ValueStore;

}
export const store: IStore = {
    dataStore: new DataStore(),
    valueStore: new ValueStore()

};
export const StoreContext = createContext(store);
export const useStore = () => {
    return useContext(StoreContext);
};