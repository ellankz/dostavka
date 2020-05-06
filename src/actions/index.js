import { GET_SERVICES, GET_CATEGORIES } from '../constants/actions';

const getServices = (category) => {
    return {
        type: GET_SERVICES,
        payload: category || {category: null}
      }
}

const getCategories = () => {
    return {
        type: GET_CATEGORIES
    }
}




export { getServices, getCategories };