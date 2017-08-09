import { ALL_COLLECTIONS_FETCH_SUCCESS, ALL_COLLECTIONS_HAVE_ERRORED } from '../actions/collections';

const INITIAL_STATE = { collections: {}, allCollectionsHaveErrored: false };

export default function collections(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ALL_COLLECTIONS_HAVE_ERRORED:
      return { ...state, allCollectionsHaveErrored: action.payload };
    case ALL_COLLECTIONS_FETCH_SUCCESS:
      return { ...state, collections: { ...action.payload } };
    default:
      return state;
  }
}
