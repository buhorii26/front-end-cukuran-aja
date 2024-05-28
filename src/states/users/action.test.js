/**
 * skenario test
 *
 * - asyncRegister thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */
import {
    describe, beforeEach, afterEach, it, vi, expect,
  } from 'vitest';
  import { hideLoading, showLoading } from 'react-redux-loading-bar';
  import api from '../../utils/api';
  import { asyncRegisterUser } from './action';
  
  const fakeRegisterUserResponse = {
    name: 'John Doe',
    email: 'example@gmail.com',
    password: '12345678',
  };
  
  const fakeErrorResponse = new Error('Ups, something went wrong');
  
  describe('asyncRegisterUser thunk', () => {
    beforeEach(() => {
      api._register = api.register;
    });
    afterEach(() => {
      api.register = api._register;
    });
  
    // delete and back up data
    delete api._register;
  
    it('should dispatch action correctly when data fetching success', async () => {
      // arrange
      // stub implementation
      api.register = () => Promise.resolve();
      // mock dispatch
      const dispatch = vi.fn();
  
      // action
      await asyncRegisterUser(fakeRegisterUserResponse)(dispatch);
      // assert
      expect(dispatch).toHaveBeenCalledWith(showLoading());
      expect(dispatch).toHaveBeenCalledWith(hideLoading());
    });
  
    it('should dispatch action and call alert correctly when data fetching failed', async () => {
      // arrange
      // stub implementation
      api.register = () => Promise.reject(fakeErrorResponse);
      // mock dispatch
      const dispatch = vi.fn();
      // mock alert
      window.alert = vi.fn();
      // action
      await asyncRegisterUser(fakeRegisterUserResponse)(dispatch);
      // assert
      expect(dispatch).toHaveBeenCalledWith(showLoading());
      expect(dispatch).toHaveBeenCalledWith(hideLoading());
      expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    });
  });
  