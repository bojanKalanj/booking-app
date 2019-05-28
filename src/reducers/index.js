import { combineReducers } from 'redux';
import { employees } from './employees';
import { appointments } from './appointments';

export default combineReducers({
    employees,
    appointments
})