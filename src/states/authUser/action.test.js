/**
 * skenario test
 *
 * - asyncSetAuthUser thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */
import {
    describe, beforeEach, afterEach, it, vi, expect,
  } from 'vitest';
  import { hideLoading, showLoading } from 'react-redux-loading-bar';
  import api from '../../utils/api';
  import { asyncSetAuthUser, setAuthUserActionCreator } from './action';
  
  const fakeSetAuthUser = {
    email: 'example@gmail.com',
    password: '12345678',
  };
  const fakeGetOwnProfileResponse = {
    id: 'user-123',
    name: 'John Doe',
    email: 'example@gmail.com',
  };
  
  const fakeErrorResponse = new Error('Ups, something went wrong');
  
  describe('asyncSetAuthUser thunk', () => {
    beforeEach(() => {
      api._login = api.login;
      api._getOwnProfile = api.getOwnProfile;
    });
    afterEach(() => {
      api.login = api._login;
      api.getOwnProfile = api._getOwnProfile;
    });
  
    // delete and back up data
    delete api._login;
    delete api._getOwnProfile;
  
    it('should dispatch action correctly when data fetching success', async () => {
      // arrange
      // stub implementation
      api.login = () => Promise.resolve('fake-token');
      api.getOwnProfile = () => Promise.resolve(fakeGetOwnProfileResponse);
      // mock dispatch
      const dispatch = vi.fn();
  
      // action
      await asyncSetAuthUser(fakeSetAuthUser)(dispatch);
      // assert
      expect(dispatch).toHaveBeenCalledWith(showLoading());
      expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeGetOwnProfileResponse));
      expect(dispatch).toHaveBeenCalledWith(hideLoading());
    });
  
    it('should dispatch action and call alert correctly when data fetching failed', async () => {
      // arrange
      // stub implementation
      api.login = () => Promise.reject(fakeErrorResponse);
      // mock dispatch
      const dispatch = vi.fn();
      // mock alert
      window.alert = vi.fn();
      // action
      await asyncSetAuthUser(fakeSetAuthUser)(dispatch);
      // assert
      expect(dispatch).toHaveBeenCalledWith(showLoading());
      expect(dispatch).toHaveBeenCalledWith(hideLoading());
      expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    });
  });
  