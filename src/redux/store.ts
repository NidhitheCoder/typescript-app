import {createStore,applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import rootReducer from './rootReducer';

export const store = createStore(rootReducer,applyMiddleware());
export const persistor = persistStore(store);

export const configureStore = {store,persistor}
export default configureStore;


