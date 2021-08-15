import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import SearchBar from '@core/chat-room/components/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import RoomName from '@core/chat-room/components/RoomName';
import { getAuthData, setSearchRoom } from '@core/auth/reducer';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        padding: theme.spacing(2)
    }
}));

const roomList = [
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
];

const RoomList = () => {
    const classes = useStyles();

    const { searchRooms } = useSelector((state) => getAuthData(state));

    return (
        <Grid item sm={4} md={3} lg={2} className={classes.root}>
            <SearchBar />
            {searchRooms && (
                <div className={classes.list}>
                    {searchRooms.map((room) => (
                        <RoomName room={room} />
                    ))}
                </div>
            )}
        </Grid>
    );
};

export default RoomList;
