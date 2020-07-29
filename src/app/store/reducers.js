import { combineReducers } from "redux";
import * as mutations from "./mutations";

let defaultState = {
  search: "",
  contacts: [],
  isLoading: false,
  errorMessage: "",
};

export const reducers = combineReducers({
  search: (search = defaultState.search, action) => {
    switch (action.type) {
      case mutations.SET_SEARCH:
        return action.search;
    }
    return search;
  },
  contacts: (contacts = defaultState.contacts, action) => {
    switch (action.type) {
      case mutations.SET_CONTACTS:
        return action.contacts;
    }
    return contacts;
  },
  isLoading: (isLoading = defaultState.isLoading, action) => {
    switch (action.type) {
      case mutations.LOADING:
        return true;
      case mutations.LOAD_FAILURE:
        return false;
      case mutations.LOAD_SUCCESS:
        return false;
    }
    return isLoading;
  },
  errorMessage: (errorMessage = defaultState.errorMessage, action) => {
    switch (action.type) {
      case mutations.LOAD_FAILURE:
        return action.errorMessage;
      case mutations.LOADING:
        return "";
    }
    return errorMessage;
  },
});
