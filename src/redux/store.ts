import {createStore,applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import rootReducer from './rootReducer';

const middleware = (store:any) => (next:any) => (action:any) => {
  console.log("Middleware triggered:", action);
  next(action);
}

export const store = createStore(rootReducer,applyMiddleware(...middleware));
export const persistor = persistStore(store);

export default {store,persistor};


