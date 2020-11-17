import { LOGOUT_CUSTOMER, SET_CUSTOMER, SET_CUSTOMER_ERROR } from './action-types';

const initialState = {
  customer: {
    name: 'Пользователь'
  },
  isLogined: false,
  error: null
};

export function reducer (state = initialState, { type, payload }) {
  switch (type) {

    case SET_CUSTOMER:
      return {
        ...state,
        customer: {...state.customer, ...payload},
        isLogined: true
      };
      
    case LOGOUT_CUSTOMER:
      return {
        ...state,
        customer: {name: 'Пользователь'},
        isLogined: false
      };

    case SET_CUSTOMER_ERROR:
      return {
        ...state,
        error: payload
      };

    default:
      return state
  }
}
