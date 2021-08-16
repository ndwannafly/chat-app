import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, IconButton, makeStyles, Paper, TextField } from '@material-ui/core';
import { AddBox } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { createRoom, getAuthData, setSearchedRooms } from '@core/auth/reducer';

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.primary.light,
        border: 'none',
        outlineWidth: '0',
        color: 'white',
        fontSize: 'large',
        minHeight: '100%'
    },
    form: {},
    title: {
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '0',
        marginBottom: '30px',
        '& h2': {
            fontWeight: '600',
            color: 'white'
        }
    },
    button: {
        width: '100%',
        marginTop: '30px',
        backgroundColor: '#7382e0'
    },
    input: {
        backgroundColor: theme.palette.primary.main,
        fontSize: '14px',
        borderRadius: '5px',
        width: '100%',
        padding: '0px'
    }
}));

const addRoomPaperProps = {
    style: {
        backgroundColor: '#36393f',
        padding: '20px',
        minWidth: '300px',
        minHeight: '200px'
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
                <DialogTitle className={classes.title}>Create New Room</DialogTitle>
                <Paper className={classes.paper}>
                    <form onSubmit={createNewRoom} className={classes.form}>
                        <TextField
                            placeholder="Enter room name"
                            onChange={(e) => setRoomName(e.target.value)}
                            variant="outlined"
                            className={classes.input}
                        />
                        <Button type="submit" className={classes.button}>
                            create
                        </Button>
                    </form>
                </Paper>
            </Dialog>
        </>
    );
};

export default AddRome;
