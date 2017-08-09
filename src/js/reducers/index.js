import { combineReducers } from 'redux';
import photos from './photos';
import collections from './collections';

const rootReducer = combineReducers({
  collections,
  photos,
});

export default rootReducer;
