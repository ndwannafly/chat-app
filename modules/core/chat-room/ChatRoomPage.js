import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { fetchMe, getAuthData } from '@core/auth/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { fetchRoom, getChatRoom } from '@core/chat-room/reducer';
import RoomList from './containers/RoomList';
import MessageContainer from './containers/MessageContainer';
import UserList from './containers/UserList';

const ChatRoomPage = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => getAuthData(state));
    const { selectedRoom } = useSelector((state) => getChatRoom(state));
    const router = useRouter();

    useEffect(() => {
        if (!user) dispatch(fetchMe());
        if (user) {
            const { rooms } = user;
            if (!selectedRoom) dispatch(fetchRoom(rooms[0]));
        }
    }, [user]);

    if (!selectedRoom) return <>Loading ...</>;
    return (
        <Grid container>
            <RoomList />
            <MessageContainer />
            <UserList />
        </Grid>
    );
};

export default ChatRoomPage;
