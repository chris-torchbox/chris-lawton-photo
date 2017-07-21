export const PHOTOS_FETCH_SUCCESS = 'PHOTOS_FETCH_SUCCESS';
export const PHOTOS_HAVE_ERRORED = 'PHOTOS_HAVE_ERRORED';

export function photosFetchSuccess(photos) {
  return {
    type: PHOTOS_FETCH_SUCCESS,
    payload: photos,
  };
}

export function photosHaveErrored(bool) {
  return {
    type: PHOTOS_HAVE_ERRORED,
    payload: bool,
  };
}

export function photosFetch(id) {
  return (dispatch) => {
    const url = `${UNSPLASH_API}/collections/${id}/photos?client_id=${process.env.APP_ID}`;
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then((json) => {
        return json;
      })
      .then((photos) => {
        dispatch(photosFetchSuccess(photos));
      })
      .catch(() => dispatch(photosHaveErrored(true)));
  };
}
