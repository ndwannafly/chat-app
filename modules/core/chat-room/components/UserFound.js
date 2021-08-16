import React, { useState } from 'react';
import { Checkbox, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    user: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: theme.palette.grey[300],

        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            borderRadius: '5px'
        },
        padding: '10px'
    }
}));

export default function UserFound({ user }) {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    const chooseUser = () => {
        if (!checked) setChecked(true);
        else setChecked(false);
    };

    return (
        <div className={classes.user} onClick={chooseUser}>
            {user.username}
            <Checkbox checked={checked} />
        </div>
    );
}
