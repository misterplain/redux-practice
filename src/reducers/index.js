import {combineReducers} from 'redux';

import toDo from './toDo';
import search from './search';


export default combineReducers({
    toDo, search
})
