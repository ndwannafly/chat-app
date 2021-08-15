import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import TypeBar from '@core/chat-room/components/TypeBar';
import Message from '@core/chat-room/components/Message';
import RoomInfo from '@core/chat-room/components/RoomInfo';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.primary.light,
        height: '100vh'
    },
    messageBox: {
        flex: '1',
        overflow: 'scroll',
        /* Hide scrollbar for Chrome, Safari and Opera */
        '&::-webkit-scrollbar': {
            display: 'none'
        },
        /* Hide scrollbar for IE, Edge and Firefox */
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
    }
}));

const MessageContainer = () => {
    const {
        selectedRoom: { name = '???', messages = [] }
    } = useSelector((state) => state.core.chatRoom);
    const classes = useStyles();
    return (
        <Grid item sm={8} md={9} lg={8} className={classes.root}>
            <RoomInfo name={name} />
            <div className={classes.messageBox}>
                {messages.map((message) => (
                    <Message message={message} />
                ))}
            </div>
            <TypeBar />
        </Grid>
    );
};

export default MessageContainer;
