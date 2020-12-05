import { ADD_PRODUCT, REMOVE_PRODUCT } from './types'

const initialState = {
  busketProducts: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {...state, busketProducts: [...state.busketProducts, action.payload]}
    case REMOVE_PRODUCT:
      return {...state, busketProducts: state.busketProducts.filter(el => el.id !== action.payload)}
    default:
      return state
  }
}
