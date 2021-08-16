import React from 'react';
import { IconButton, InputBase, makeStyles, MenuItem, Paper } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { getAuthData, searchRoom } from '@core/auth/reducer';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#202225',
        display: 'flex',
        color: '#515459',
        justifyContent: 'space-between',
        borderRadius: '5px',
        marginBottom: theme.spacing(2)
    },
    input: {
        paddingLeft: '10px',
        fontSize: '20px',
        color: 'white'
    }
}));

const rooms = [
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

const SearchBar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    /*
    const { rooms } = useSelector((state) => getAuthData(state)?.user);
*/

    const getSuggestion = (e) => {
        const searchedRooms = rooms.filter((room) => room.name.includes(e.target.value));
        console.log(searchedRooms);
        dispatch(searchRoom({ searchedRooms }));
    };

    return (
        <Paper component="form" className={classes.root}>
            <InputBase className={classes.input} placeholder="Search room" onChange={getSuggestion} />
        </Paper>
    );
};

export default SearchBar;
