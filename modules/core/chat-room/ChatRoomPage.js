import React from 'react';
import Grid from '@material-ui/core/Grid';
import RoomList from './containers/RoomList';
import MessageContainer from './containers/MessageContainer';
import UserList from './containers/UserList';

const ChatRoomPage = () => (
    <Grid container>
        <RoomList />
        <MessageContainer />
        <UserList />
    </Grid>
);

export default ChatRoomPage;
