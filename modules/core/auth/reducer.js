import { asyncAction } from '@core/utils/action';
import axios from 'axios';
import { handleActions } from 'redux-actions';
import { AUTH_ME, AUTH_TOKEN } from '@core/auth/constants';

const initial_state = {
    token: null,
    user: null,
    searchRooms: [
        {
            name: 'room 1',
            id: '1',
            users: [
                {
                    username: 'user 1'
                },
                {
                    username: 'user 2'
                },
                {
                    username: 'user 3'
                }
            ],
            message: [
                {
                    content: `Hello I'm Duc`
                },
                {
                    content: 'My name is Long'
                },
                {
                    content: 'Nice to meet yah'
                }
            ]
        },
        {
            name: 'room 2',
            id: '2',
            users: [
                {
                    username: 'user 1'
                },
                {
                    username: 'user 4'
                },
                {
                    username: 'user 3'
                }
            ],
            message: [
                {
                    content: `Hello I'm Duc from room 2`
                },
                {
                    content: 'My name is Long from room 2'
                },
                {
                    content: 'Nice to meet yah from room 2'
                }
            ]
        }
    ]
};

export const fetchSearchRoom = asyncAction('AUTH/SET_SEARCH_ROOM', async ({ getRooms }) => {
    return getRooms;
});

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

export default handleActions(
    {
        [fetchToken.START]: () => ({
            token: null,
            user: null
        }),

        [fetchToken.SUCCESS]: (state, { payload }) => ({
            token: payload?.data?.jwt,
            user: payload?.data?.user,
            searchRooms: payload?.data?.user?.rooms
        }),

        [fetchToken.FAILURE]: (state) => ({
            ...state,
            token: null
        }),

        [fetchMe.START]: (state) => ({
            ...state
        }),

        [fetchMe.SUCCESS]: (state, { payload }) => ({
            ...state,
            user: payload?.data
        }),

        [fetchMe.FAILURE]: (state) => ({
            ...state,
            user: null
        }),

        [fetchSearchRoom.START]: (state) => ({
            ...state
        }),

        [fetchSearchRoom.SUCCESS]: (state, { payload }) => {
            return {
                ...state,
                searchRooms: payload?.data
            };
        },

        [fetchSearchRoom.FAILURE]: (state) => ({
            ...state,
            searchRooms: []
        })
    },
    initial_state
);
