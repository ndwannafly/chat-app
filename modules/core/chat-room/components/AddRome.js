import React, { useState } from 'react';
import { Button, Dialog, IconButton, makeStyles, Paper, TextField } from '@material-ui/core';
import { AddBox } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { createRoom, getAuthData, setSearchedRooms } from '@core/auth/reducer';

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.primary.main,
        border: 'none',
        outlineWidth: '0',
        color: 'white',
        fontSize: 'large'
    },
    form: {}
}));

const addRoomPaperProps = {
    style: {
        backgroundColor: '#2e3136'
    }
};

const AddRome = () => {
    const [addRoomOpen, setAddRoomOpen] = useState(false);
    const [roomName, setRoomName] = useState('');
    const { id } = useSelector((state) => getAuthData(state)?.user);
    const { username } = useSelector((state) => getAuthData(state)?.user);
    const { searchedRooms } = useSelector((state) => getAuthData(state));

    const dispatch = useDispatch();

    const classes = useStyles();
    const roomAddClick = () => {
        setAddRoomOpen(true);
    };

    const closeRoomAdd = () => {
        setAddRoomOpen(false);
    };

    const createNewRoom = async (e) => {
        e.preventDefault();
        await dispatch(createRoom({ id, roomName }));
        const newSearchedRoom = {
            name: roomName,
            id: '3',
            users: [
                {
                    username
                }
            ],
            message: []
        };
        dispatch(setSearchedRooms({ newSearchedRoom }));
    };

    return (
        <>
            <IconButton onClick={roomAddClick}>
                <AddBox />
            </IconButton>
            <Dialog open={addRoomOpen} onClose={closeRoomAdd} PaperProps={addRoomPaperProps}>
                <Paper className={classes.paper}>
                    <form onSubmit={createNewRoom} className={classes.form}>
                        <TextField placeholder="Enter room name" onChange={(e) => setRoomName(e.target.value)} />
                        <Button type="submit">create new room</Button>
                    </form>
                </Paper>
            </Dialog>
        </>
    );
};

export default AddRome;
