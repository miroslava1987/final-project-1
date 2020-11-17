import { reducer, InitialState } from './reducer';
import * as actions from './action-types';

describe('Favorite reducer', () => {
  it('SET_FAVORITES', () => {
    const action = {
      type: actions.SET_FAVORITES,
      payload: [1, 2, 3]
    }
    expect(reducer(InitialState, action)).toEqual({
      ...InitialState,
      favorites: action.payload
    });
  });
})