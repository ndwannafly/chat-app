import { asyncAction } from '@core/utils/action';
import axios from 'axios';
import { handleActions } from 'redux-actions';

const initial_state = {
    token: null,
    user: null
};

export const getAuthData = (state) => state?.core.auth;

export const fetchToken = asyncAction('AUTH/FETCH_TOKEN', ({ identifier, password }) => {
    const form = new FormData();
    form.append('identifier', identifier);
    form.append('password', password);
    return axios.post('http://localhost:1337', form);
});

export default handleActions(
    {
        [fetchToken.START]: (state) => ({
            ...state,
            token: null,
            user: null
        }),

        [fetchToken.SUCCESS]: (state, { payload }) => ({
            ...state,
            token: payload?.data?.jwt,
            user: payload?.data?.user
        }),

        [fetchToken.FAILURE]: (state) => ({
            ...state,
            token: null
        })
    },
    initial_state
);
