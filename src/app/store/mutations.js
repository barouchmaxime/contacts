export const REQUEST_LOAD_CONTACTS = `REQUEST_LOAD_CONTACTS`;
export const LOADING = `LOADING`;
export const LOAD_SUCCESS = `LOAD_SUCCESS`;
export const LOAD_FAILURE = `LOAD_FAILURE`;
export const SET_CONTACTS = `SET_CONTACTS`;

export const SET_SEARCH = `SET_SEARCH`;

export const loadContacts = () => ({
  type: REQUEST_LOAD_CONTACTS,
});
export const setLoading = () => ({
  type: LOADING,
});
export const setLoadSuccess = () => ({
  type: LOAD_SUCCESS,
});
export const setLoadFailure = (errorMessage = "") => ({
  type: LOAD_FAILURE,
  errorMessage,
});

export const setContacts = (contacts = {}) => ({
  type: SET_CONTACTS,
  contacts,
});

export const setSearch = (search = "") => ({
  type: SET_SEARCH,
  search,
});
