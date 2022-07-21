import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import {createMiddleware} from 'react-redux'
import logger from "redux-logger"

import reducers from "../reducers/index";

const middlewareList = process.env.NODE_ENV === "development" ? [logger] : [];


const store = createStore(reducers,applyMiddleware(...middlewareList))

export default store