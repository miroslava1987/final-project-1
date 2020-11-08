import {server} from '../../API';
import { addToFavorites, removeFromFavorites, setFavorites, setFavoriteLoader } from './actions-creators';

function unique (arr) {
  const res = new Map();
  return arr.filter((a) => !res.has(a._id) && res.set(a._id, 1))
};

const updatedFavorites = async (state) => {
  const {customer} = state;

  if (customer.isLogined) {
    if (state.favorites.favorites.length > 0) {
      const productsInFav = state.favorites.favorites.map(item => item._id);
      const newFavList = {products: productsInFav};
      try {
        //dispatch(setFavoriteLoader());
        await server.put('/wishlist', newFavList)
      } catch (error) {
        console.log(error)
      }
    }
  }
}

export const getFavorites = () => async (dispatch, getState) => {
  const state = getState();
  const {customer} = state;
 
  if (customer.isLogined) {
    try {
      dispatch(setFavoriteLoader());
      const {status, data} = await server.get('/wishlist');
      console.log({status, data})
      if (status === 200) {
        const itemsToFav = [...state.favorites.favorites, ...data.products];
        const result = unique(itemsToFav);
        dispatch(setFavorites(result));
        const newState = getState();
        updatedFavorites(newState);
        console.log(newState)
      }
    } catch (error) {
      console.log(error)
    }
  }
};

export const addProductToFav = (productItem) => (dispatch, getState) => {
  dispatch(addToFavorites(productItem));
  const state = getState();
  updatedFavorites(state);
}

export const removeProductFromFav = (productItem) => (dispatch, getState) => {
  dispatch(removeFromFavorites(productItem));
  const state = getState();
  updatedFavorites(state);
}