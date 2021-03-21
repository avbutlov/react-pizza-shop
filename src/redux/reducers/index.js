import {combineReducers} from 'redux'
import filtersReducer from './filters';
import pizzesReducer from './pizzes';

const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzes: pizzesReducer
})

export default rootReducer;