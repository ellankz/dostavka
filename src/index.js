import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import ReactGA from 'react-ga';
import App from "./components/App";
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

ReactGA.initialize('UA-160996123-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.querySelector("#root"));
