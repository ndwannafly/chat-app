import { asyncAction } from '@core/utils/action';
import axios from 'axios';
import { handleActions } from 'redux-actions';
import { AUTH_ME, AUTH_TOKEN } from '@core/auth/constants';
import { createAction } from '@reduxjs/toolkit';

const initial_state = {
    token: null,
    user: {
        id: 'id1',
        rooms: [
            {
                users: ['id1', 'id2'],
                name: 'room 1'
            }
        ],
        username: 'user 1'
    },
    searchedUsers: [
        {
            username: 'user 1'
        },
        {
            username: 'user 2'
        },
        {
            username: 'user 3'
        },
        {
            username: 'user 4'
        },
        {
            username: 'user 5'
        }
    ],
    searchedRooms: [
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

export const createRoom = asyncAction('AUTH/CREATE_NEW_ROOM', async ({ id, roomName }) => ({
    users: [id],
    name: roomName
}));

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

export const setSearchedRooms = createAction('AUTH/SET_SEARCHED_ROOMS', ({ newSearchedRoom }) => ({
    payload: newSearchedRoom
}));

export const fetchMe = asyncAction('AUTH/FETCH_ME', async () => {
    return axios.get(AUTH_ME, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
});

export const searchRoom = asyncAction('AUTH/SET_SEARCHED_ROOMS', async ({ searchedRooms }) => searchedRooms);

export const searchUser = asyncAction('AUTH/FETCH_SEARCH_USERS', async ({ searchedUsers }) => {
    console.log(searchedUsers);
    return searchedUsers;
});

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
        }),

        [searchUser.START]: (state) => ({
            ...state
        }),

        [searchUser.SUCCESS]: (state, { payload }) => ({
            ...state,
            searchedUsers: payload?.data
        }),

        [searchUser.FAILURE]: (state) => ({
            ...state,
            searchedUsers: []
        }),

        [createRoom.START]: (state) => ({
            ...state
        }),

        [createRoom.SUCCESS]: (state, { payload }) => {
            console.log(state);
            const getRooms = state.user.rooms;
            getRooms.push(payload?.data);
            console.log(getRooms);
            return {
                ...state,
                user: {
                    id: payload?.data?.id,
                    rooms: getRooms
                }
            };
        },

        [createRoom.FAILURE]: (state) => ({
            ...state
        }),

        'AUTH/SET_SEARCHED_ROOMS': (state, { payload }) => {
            const getSearchedRooms = state.searchedRooms;
            console.log(payload);
            getSearchedRooms.push(payload);
            console.log(getSearchedRooms);
            return {
                ...state,
                searchedUsers: getSearchedRooms
            };
        }
    },
    initial_state
);
