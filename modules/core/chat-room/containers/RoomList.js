import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, Dialog, DialogTitle, IconButton, InputBase, makeStyles, Paper, TextField } from '@material-ui/core';
import SearchBar from '@core/chat-room/components/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import RoomName from '@core/chat-room/components/RoomName';
import { getAuthData, searchUser } from '@core/auth/reducer';
import { AddBox, PersonAdd } from '@material-ui/icons';
import AddPerson from '@core/chat-room/components/AddPerson';
import AddRome from '@core/chat-room/components/AddRome';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        padding: theme.spacing(2)
    },
    bar: {
        display: 'flex',
        alignItems: 'flex-start'
    },
    paper: {
        backgroundColor: theme.palette.primary.main,
        border: 'none',
        outlineWidth: '0',
        color: 'white',
        fontSize: 'large'
    },
    form: {}
}));

const RoomList = () => {
    const classes = useStyles();
    const { searchedRooms } = useSelector((state) => getAuthData(state));

    return (
        <Grid item sm={4} md={3} lg={2} className={classes.root}>
            <div className={classes.bar}>
                <SearchBar />
                <AddPerson />
                <AddRome />
            </div>
            <div className={classes.list}>
                {searchedRooms.map((room) => (
                    <RoomName room={room} />
                ))}
            </div>
        </Grid>
    );
};

export default RoomList;
