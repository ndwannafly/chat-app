import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import TypeBar from '@core/chat-room/components/TypeBar';
import Message from '@core/chat-room/components/Message';
import RoomInfo from '@core/chat-room/components/RoomInfo';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { MessagePaginate } from '@core/chat-room/components/MessagePaginate';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.lighter,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    messageBox: {
        flex: 1,
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
    let currentDate = moment(messages[0].createdAt).format('hh:mm:ss DD/MM/YYYY');
    const classes = useStyles();
    return (
        <Grid item sm={8} md={9} lg={8} className={classes.root}>
            <RoomInfo name={name} />
            <div className={classes.messageBox}>
                {messages.map((message) => {
                    if (moment(message.createdAt).format('hh:mm:ss DD/MM/YYYY') !== currentDate) {
                        currentDate = moment(message.createdAt).format('hh:mm:ss DD/MM/YYYY');
                        return (
                            <>
                                <MessagePaginate content={moment(currentDate, 'hh:mm:ss DD/MM/YYYY').format('ll')} />
                                <Message message={message} />
                            </>
                        );
                    }
                    return <Message message={message} />;
                })}
            </div>
            <TypeBar />
        </Grid>
    );
};

export default MessageContainer;
