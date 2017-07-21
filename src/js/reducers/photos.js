import { PHOTOS_FETCH_SUCCESS, PHOTOS_HAVE_ERRORED } from '../actions/photos';

const INITIAL_STATE = { photos: {}, photosHaveErrored: false };

export default function photos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PHOTOS_HAVE_ERRORED:
      return { ...state, photosHaveErrored: action.payload };
    case PHOTOS_FETCH_SUCCESS:
      return { ...state, photos: { ...action.payload } };
    default:
      return state;
  }
}
