import React from 'react';
import { IconButton, InputBase, makeStyles, MenuItem, Paper } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { getAuthData, searchedRooms, searchRoom } from '@core/auth/reducer';
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

const SearchBar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { rooms } = useSelector((state) => getAuthData(state)?.user);

    const getSuggestion = (e) => {
        const searchedRooms = rooms.filter((room) => room.name.includes(e.target.value));
        console.log(searchedRooms);
        dispatch(searchRoom({ searchedRooms }));
    };

    return (
        <Paper component="form" className={classes.root}>
            <InputBase className={classes.input} placeholder="Search room" onChange={getSuggestion} />
            <IconButton type="submit" className={classes.iconButton}>
                <Search />
            </IconButton>
            C
        </Paper>
    );
};

export default SearchBar;
