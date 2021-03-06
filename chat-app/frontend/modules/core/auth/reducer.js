import { asyncAction } from '@core/utils/action';
import axios from 'axios';
import { handleActions } from 'redux-actions';
import { AUTH_ME, AUTH_REGISTER, AUTH_TOKEN } from '@core/auth/constants';
import { createAction } from '@reduxjs/toolkit';
import { ENV_URL } from '@core/chat-room/constants';
import { socket } from '../../../config/web-sockets';

const initial_state = {
    token: null,
    user: null,
    userError: false,
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
export const fetchRegister = asyncAction('AUTH/FETCH_REGISTER', async ({ email, username, password }) => {
    const form = new FormData();
    form.append('email', email);
    form.append('username', username);
    form.append('password', password);
    return axios.post(AUTH_REGISTER, form, {
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

export const logout = createAction('AUTH/LOGOUT', ({ username }) => {
    localStorage.setItem('token', '');
    if (username) {
        console.log('emit: logout ' + username);
        socket.emit('logout', {username});
    }
    return {};
});

export const searchRoom = createAction('AUTH/SEARCH_ROOM', ({ searchedRooms }) => ({
    payload: {
        searchedRooms
    }
}));

export const resetSearchedRooms = createAction('AUTH/RESET_SEARCHED_ROOMS');

export const addRoom = asyncAction('CHAT_ROOM/ADD_ROOM', async ({ name }) => {
    const form = new FormData();
    form.append('name', name);
    return axios.post(`${ENV_URL}rooms/`, form, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
});

export default handleActions(
    {
        [fetchToken.START]: () => ({
            token: null,
            user: null,
            userError: false,
            searchedRooms: []
        }),

        [fetchToken.SUCCESS]: (state, { payload }) => ({
            token: payload?.data?.jwt,
            user: payload?.data?.user,
            userError: false,
            searchedRooms: payload?.data?.user?.rooms
        }),

        [fetchToken.FAILURE]: (state) => ({
            ...state,
            userError: true,
            token: null
        }),

        [fetchRegister.START]: () => ({
            token: null,
            user: null,
            userError: false,
            searchedRooms: []
        }),

        [fetchRegister.SUCCESS]: (state, { payload }) => ({
            token: payload?.data?.jwt,
            user: payload?.data?.user,
            userError: false,
            searchedRooms: payload?.data?.user?.rooms
        }),

        [fetchRegister.FAILURE]: (state) => ({
            ...state,
            userError: true,
            token: null
        }),

        [fetchMe.START]: (state) => ({
            ...state,
            userError: false
        }),

        [fetchMe.SUCCESS]: (state, { payload }) => ({
            user: payload?.data,
            searchedRooms: payload?.data?.rooms,
            userError: false
        }),

        [fetchMe.FAILURE]: (state) => ({
            ...state,
            user: null,
            userError: true
        }),

        [addRoom.START]: (state) => ({
            ...state
        }),

        [addRoom.SUCCESS]: (state, { payload }) => {
            return {
                ...state,
                user: {
                    ...state.user,
                    rooms: [...state.user.rooms, payload?.data]
                },
                searchedRooms: [...state.searchedRooms, payload?.data]
            };
        },

        [addRoom.FAILURE]: (state) => ({
            ...state
        }),

        'AUTH/SEARCH_ROOM': (state, { payload }) => ({
            ...state,
            searchedRooms: payload?.searchedRooms
        }),

        'AUTH/RESET_SEARCHED_ROOMS': (state) => ({
            ...state,
            searchedRooms: state.user.rooms
        }),

        'AUTH/LOGOUT': (state) => ({
            ...state,
            token: null,
            user: null,
            userError: false,
            searchedRooms: []
        })
    },
    initial_state
);
