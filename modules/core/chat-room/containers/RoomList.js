import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import SearchBar from '@core/chat-room/components/SearchBar';
import { useSelector } from 'react-redux';
import RoomName from '@core/chat-room/components/RoomName';
import { getAuthData } from '@core/auth/reducer';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        padding: theme.spacing(2)
    }
}));

const RoomList = () => {
    const classes = useStyles();
    const { rooms } = useSelector((state) => getAuthData(state)?.user);
    return (
        <Grid item sm={4} md={3} lg={2} className={classes.root}>
            <SearchBar />
            <div className={classes.list}>
                {rooms.map((room) => (
                    <RoomName room={room} />
                ))}
            </div>
        </Grid>
    );
};

export default RoomList;
