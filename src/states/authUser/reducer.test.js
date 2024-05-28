/**
 * test scenario for authUserReducer
 *
 * - authUserReducer function
 * - should return the initial state when given by unknown action
 * - should return the detailThread when given by RECEIVE_DETAIL_THREAD action
 * - should set the auth user when given SET_AUTH_USER action
 * - should unset the auth user when given UNSET_AUTH_USER action
 */
import { describe, it, expect } from 'vitest';
import authUserReducer from './reducer';
import { ActionType } from './action';

describe('should return the initial state when given by unknown action', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    // action
    const nextState = authUserReducer(initialState, action);
    // assert
    expect(nextState).toEqual(initialState);
  });
  it('should set the auth user when given SET_AUTH_USER action', () => {
    const initialState = null;
    const authUser = { id: 1, name: 'John Doe' };
    const action = {
      type: ActionType.SET_AUTH_USER,
      payload: { authUser },
    };
    const state = authUserReducer(initialState, action);
    expect(state).toEqual(authUser);
  });

  it('should unset the auth user when given UNSET_AUTH_USER action', () => {
    const initialState = { id: 1, name: 'John Doe' };
    const action = { type: ActionType.UNSET_AUTH_USER };
    const state = authUserReducer(initialState, action);
    expect(state).toBeNull();
  });
});
