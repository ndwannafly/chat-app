import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import MessageBox from '@core/chat-room/containers/MessageBox';
import { makeStyles } from '@material-ui/core';
import TypeBar from '@core/chat-room/components/TypeBar';
import Message from '@core/chat-room/components/Message';
import RoomInfo from '@core/chat-room/components/RoomInfo';

const room = {
    name: 'Demo room',
    messages: [
        {
            username: 'user1',
            content: 'hello everyone',
            date: new Date(2021, 8, 10, 10, 0, 0)
        },
        {
            username: 'user2',
            content: 'hello',
            date: new Date(2021, 8, 10, 10, 0, 5)
        },
        {
            username: 'user1',
            content: 'My name is Long',
            date: new Date(2021, 8, 10, 11, 0, 5)
        },
        {
            username: 'user1',
            content: 'I am from Vietnam',
            date: new Date(2021, 8, 10, 11, 0, 10)
        },
        {
            username: 'user2',
            content: 'I am from Vietnam too',
            date: new Date(2021, 8, 11, 0, 0, 0)
        },
        {
            username: 'user3',
            content: 'Hello you guy',
            date: new Date(2021, 8, 11, 1, 0, 0)
        },
        {
            username: 'user3',
            content: 'My name is Duc',
            date: new Date(2021, 8, 11, 1, 0, 10)
        },
        {
            username: 'user3',
            content: 'I am Vietnamese',
            date: new Date(2021, 0, 11, 4, 0, 0)
        },
        {
            username: 'user2',
            content: 'I am Vietnamese',
            date: new Date(2021, 0, 11, 4, 10, 0)
        },
        {
            username: 'user3',
            content: 'I am Vietnamese',
            date: new Date(2021, 0, 11, 4, 0, 0)
        },
        {
            username: 'user3',
            content: 'I am Vietnamese',
            date: new Date(2021, 0, 11, 4, 0, 0)
        },
        {
            username: 'user3',
            content: 'I am Vietnamese',
            date: new Date(2021, 0, 11, 4, 0, 0)
        },
        {
            username: 'user3',
            content: 'I am Vietnamese',
            date: new Date(2021, 0, 11, 4, 0, 0)
        },
        {
            username: 'user3',
            content: 'I am Vietnamese',
            date: new Date(2021, 0, 11, 4, 0, 0)
        },
        {
            username: 'user3',
            content: 'I am Vietnamese',
            date: new Date(2021, 0, 11, 4, 0, 0)
        },
        {
            username: 'user3',
            content: 'I am Vietnamese',
            date: new Date(2021, 0, 11, 4, 0, 0)
        }
    ]
};

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
    const { name, messages } = room;
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
