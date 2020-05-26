import { combineReducers } from 'redux';

import course from './course';
// import classes from './classes';

export default combineReducers({
    course,  // abaixo posso agregar outros reducers
    // classes,
})