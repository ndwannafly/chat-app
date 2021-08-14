import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'flex-start',
        fontSize: '1rem',
        color: theme.palette.grey[200],
        padding: theme.spacing(1, 2),
        marginBottom: theme.spacing(2),
        '&:hover': {
            backgroundColor: theme.palette.primary.main
        }
    },
    messageInfo: {
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginBottom: theme.spacing(0.75)
    },
    avatar: {
        width: '45px',
        borderRadius: '100%',
        marginRight: theme.spacing(2)
    },
    date: {
        fontSize: '0.8rem',
        marginLeft: theme.spacing(1),
        color: theme.palette.grey[600]
    },
    content: {
        fontWeight: 'normal'
    }
}));

const Message = ({ message: { username, content, date } }) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <img src="avatar/online-avatar.png" className={classes.avatar} />
            <div>
                <div className={classes.messageInfo}>
                    <div className={classes.username}>{username}</div>
                    <div className={classes.date}>{moment(date).format('DD/MM/yyyy hh:mm')}</div>
                </div>
                <div className={classes.content}>{content}</div>
            </div>
        </Grid>
    );
};

export default Message;