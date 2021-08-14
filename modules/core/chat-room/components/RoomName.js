import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.grey[500],
        fontSize: '25px',
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.grey[200]
        }
    },
    roomName: {
        fontSize: '40px',
        padding: '8px'
    }
}))

const RoomName = ({ name }) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <span className={classes.roomName}>#</span>
            {name}
        </div>
    )
};

export default RoomName;
