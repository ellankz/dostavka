import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import data from '../data/data';
import * as ACTIONS from '../constants/actions';

const servicesReducer = (state=[], action) => {
    switch (action.type){
        case ACTIONS.GET_SERVICES:
            if (action.payload.category){
                return data.services.filter((item) => item.deliverableGroups.indexOf(action.payload.category) !== -1);
            } else {
                return data.services;
            }
        default:
            return state;
    }
    
}

const categoriesReducer = (state=[], action) => {
    switch (action.type){
        case ACTIONS.GET_CATEGORIES: 
            return data.categories;
        default:
            return state;
    }
}

const activeCategoryReducer = (state=null, action) => {
    switch (action.type){
        case ACTIONS.GET_SERVICES:
            if (action.payload.category){
                return action.payload.category;
            } else {
                return null;
            };
        default:
            return state;
    }
}

export default combineReducers({
    services: servicesReducer,
    categories: categoriesReducer,
    activeCategory: activeCategoryReducer,
    form: formReducer
});