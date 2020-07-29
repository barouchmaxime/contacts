import { take, put, select } from "redux-saga/effects";
import axios from "axios";
import * as mutations from "./mutations";

const url = "http://private-05627-frontendnewhire.apiary-mock.com";

export function* loadContactsSaga() {
  while (true) {
    yield take(mutations.REQUEST_LOAD_CONTACTS);
    try {
      yield put(mutations.setLoading());
      const { data } = yield axios.get(url + `/contact_list`, {
        crossDomain: true,
      });
      yield put(mutations.setContacts(data));
      yield put(mutations.setLoadSuccess());
    } catch (e) {
      /* catch block handles failed fetch */
      console.error("Error", e);
      yield put(
        mutations.setLoadFailure(
          "Failed loading data, please check your network connections or contact your system administrator"
        )
      );
    }
  }
}
