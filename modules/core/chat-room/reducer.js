import { asyncAction } from '@core/utils/action';
import axios from 'axios';
import { handleActions } from 'redux-actions';
import { ENV_URL } from '@core/chat-room/constants';

const initial_state = {
    selectedRoom: null
};

export const fetchRoom = asyncAction('CHAT_ROOM/FETCH_ROOM', async (room) => {
    return axios.get(`${ENV_URL}rooms/${room.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
});

export const getChatRoom = (state) => state?.core?.chatRoom;

export default handleActions(
    {
        [fetchRoom.START]: (state) => ({
            ...state
        }),

        [fetchRoom.SUCCESS]: (state, { payload }) => ({
            ...state,
            selectedRoom: payload?.data
        }),

        [fetchRoom.FAILURE]: (state) => ({
            ...state
        })
    },
    initial_state
);
