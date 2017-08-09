export const ALL_COLLECTIONS_FETCH_SUCCESS = 'ALL_COLLECTIONS_FETCH_SUCCESS';
export const ALL_COLLECTIONS_HAVE_ERRORED = 'ALL_COLLECTIONS_HAVE_ERRORED';

export function allCollectionsFetchSuccess(collections) {
  return {
    type: ALL_COLLECTIONS_FETCH_SUCCESS,
    payload: collections,
  };
}

export function allCollectionsHaveErrored(bool) {
  return {
    type: ALL_COLLECTIONS_HAVE_ERRORED,
    payload: bool,
  };
}

export function allCollectionsFetch() {
  return (dispatch) => {
    const url = `${UNSPLASH_API}/users/chrislawton/collections?client_id=${process.env.APP_ID}`;
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then((collections) => {
        dispatch(allCollectionsFetchSuccess(collections));
      })
      .catch(() => dispatch(allCollectionsHaveErrored(true)));
  };
}
