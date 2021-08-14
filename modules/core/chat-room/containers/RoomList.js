import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import RoomName from '@chat-room/components/RoomName';
import SearchBar from '@chat-room/components/SearchBar';

const roomArray = {
    rooms: [
        {
            name: 'Room 1'
        },
        {
            name: 'Room 2'
        },
        {
            name: 'Room 3'
        },
        {
            name: 'Room 4'
        },
        {
            name: 'Room 5'
        },
        {
            name: 'Room 6'
        },
        {
            name: 'Room 7'
        }
    ]
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.primary.main,
        height: '100vh'
    }
}))

const RoomList = () => {
    const classes = useStyles();
    const { rooms } = roomArray;
    return (
        <Grid item sm={4} md={3} lg={2} className={classes.root}>
            <SearchBar />
            <div className={classes.list}>
                {rooms.map(({ name }) => (
                    <RoomName name={name} />
                ))}
            </div>
        </Grid>

    )
}

export default RoomList;
