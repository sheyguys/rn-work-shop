import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import type {Middleware} from 'redux';
import ReduxFlipper from 'redux-flipper';
import {thunk} from 'redux-thunk';

import {coinReducer} from './coins/reducers';
import coinMiddleware from './coins/middleware';

export const configureStore = () => {
  const reducers = combineReducers({
    // Add reducers here
    coin: coinReducer,
  });

  const middlewares: Middleware[] = [coinMiddleware];

  if (__DEV__) {
    const createDebugger = ReduxFlipper;
    middlewares.push(createDebugger() as Middleware);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares, thunk);

  const store = createStore(reducers, undefined, compose(middlewareEnhancer));
  return store;
};

export type RootState = ReturnType<
  ReturnType<typeof configureStore>['getState']
>;
