import { asyncAction } from '@core/utils/action';
import axios from 'axios';
import { handleActions } from 'redux-actions';
import { AUTH_ME, AUTH_TOKEN } from '@core/auth/constants';

const initial_state = {
    token: null,
    user: null,
    searchedRooms: []
};

export const getAuthData = (state) => state?.core.auth;

export const fetchToken = asyncAction('AUTH/FETCH_TOKEN', async ({ identifier, password }) => {
    const form = new FormData();
    form.append('identifier', identifier);
    form.append('password', password);
    return axios.post(AUTH_TOKEN, form, {
        transformRequest: (data, headers) => {
            delete headers.common.Authorization;
            return data;
        }
    });
});

export const fetchMe = asyncAction('AUTH/FETCH_ME', async () => {
    return axios.get(AUTH_ME, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
});

export const searchRoom = asyncAction('AUTH/SET_SEARCHED_ROOMS', async ({ searchedRooms }) => searchedRooms);

export default handleActions(
    {
        [fetchToken.START]: () => ({
            token: null,
            user: null,
            searchedRooms: []
        }),

        [fetchToken.SUCCESS]: (state, { payload }) => ({
            token: payload?.data?.jwt,
            user: payload?.data?.user,
            searchedRooms: payload?.data?.user?.rooms
        }),

        [fetchToken.FAILURE]: (state) => ({
            ...state,
            token: null
        }),

        [fetchMe.START]: (state) => ({
            ...state
        }),

        [fetchMe.SUCCESS]: (state, { payload }) => ({
            user: payload?.data,
            searchedRooms: payload?.data?.rooms
        }),

        [fetchMe.FAILURE]: (state) => ({
            ...state,
            user: null
        }),

        [searchRoom.START]: (state) => ({
            ...state
        }),

        [searchRoom.SUCCESS]: (state, { payload }) => ({
            ...state,
            searchedRooms: payload?.data
        }),

        [searchRoom.FAILURE]: (state) => ({
            ...state,
            searchedRooms: []
        })
    },
    initial_state
);
