import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

store.subscribe((): void => localStorage.setItem('state', JSON.stringify(store.getState())));

export type AppState = ReturnType<typeof rootReducer>

export default store;

