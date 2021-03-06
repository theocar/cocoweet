// @flow
import type {State} from 'app/store/state';

import deepmerge from 'deepmerge';
import {applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import {createStore} from 'redux-simplux';
import {getInitial} from 'app/store/state';
import storageMiddleware from 'app/store/middleware.tostorage';

const storage = storageMiddleware({
  key: 'cocoweet',
  slicer: (state: State): Object => ({
    credentials: state.credentials
  }),
  actions: ['SIGNIN_FINISH', 'INTERNAL_INIT_CREDENTIALS_FAIL']
});

const savedState = storage.restore();
const initialState: State = getInitial();

const logger = createLogger();


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle, max-len

export default createStore(
  savedState ? deepmerge(initialState, savedState) : initialState,
  composeEnhancers(applyMiddleware(logger, storage.middleware))
);
