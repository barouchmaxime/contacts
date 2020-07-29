import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

import { reducers } from "./reducers";
import * as sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducers,
  applyMiddleware(createLogger(), sagaMiddleware)
);

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}
