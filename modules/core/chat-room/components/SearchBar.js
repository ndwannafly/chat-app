import React from 'react';
import { IconButton, InputBase, makeStyles, MenuItem, Paper } from '@material-ui/core';
import { Search } from '@material-ui/icons';

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

    return (
        <Paper component="form" className={classes.root}>
            <InputBase className={classes.input} placeholder="Search room" />
            <IconButton type="submit" className={classes.iconButton}>
                <Search />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
