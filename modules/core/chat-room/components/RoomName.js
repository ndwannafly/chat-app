import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRoom, getChatRoom } from '@core/chat-room/reducer';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.grey[500],
        fontSize: '18px',
        marginBottom: theme.spacing(1),
        '&:hover': {
            backgroundColor: theme.palette.primary.lighter,
            color: theme.palette.grey[400],
            borderRadius: '5px'
        }
    },
    selected: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '18px',
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.grey[200],
        borderRadius: '5px',
        marginBottom: theme.spacing(1)
    },
    roomName: {
        fontSize: '40px',
        padding: '8px'
    }
}));

const RoomName = ({ room }) => {
    const classes = useStyles();
    const { selectedRoom } = useSelector((state) => getChatRoom(state));
    const dispatch = useDispatch();
    return (
        <div
            className={room.id === selectedRoom.id ? classes.selected : classes.root}
            onClick={() => dispatch(fetchRoom({ room }))}
        >
            <span className={classes.roomName}>#</span>
            {room.name}
        </div>
    );
};

RoomName.defaultProps = {
    room: true
};

RoomName.propTypes = {
    room: PropTypes.object
};

export default RoomName;
