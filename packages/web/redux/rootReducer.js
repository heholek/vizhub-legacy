import { combineReducers } from 'redux';
import { uiRedux } from 'vizhub-ui';
import { csrfToken, visualization } from './reducers';
const { reducers: { ide } } = uiRedux;

export const rootReducer = combineReducers({
  ide,
  csrfToken,
  visualization
});
