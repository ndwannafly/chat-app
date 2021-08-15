import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment-timezone';
import { getChatRoom } from '@core/chat-room/reducer';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'flex-start',
        fontSize: '1rem',
        color: theme.palette.grey[200],
        padding: theme.spacing(1, 2),
        marginBottom: theme.spacing(2),
        '&:hover': {
            backgroundColor: theme.palette.primary.light
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
    username: {
        color: theme.palette.secondary.light
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

const Message = ({ message: { user, content, createdAt, updatedAt } }) => {
    const classes = useStyles();
    const { users } = useSelector((state) => getChatRoom(state)?.selectedRoom);
    return (
        <Grid container className={classes.root}>
            <img src="avatar/online-avatar.png" className={classes.avatar} alt="online" />
            <div>
                <div className={classes.messageInfo}>
                    <div className={classes.username}>{users.filter(({ id }) => id === user)[0].username}</div>
                    <div className={classes.date}>
                        {moment(createdAt).tz('Europe/Moscow').format('DD/MM/yyyy hh:mm') +
                            (createdAt === updatedAt
                                ? ''
                                : ` (Updated at ${moment(updatedAt).tz('Europe/Moscow').format('DD/MM/yyyy hh:mm')})`)}
                    </div>
                </div>
                <div className={classes.content}>{content}</div>
            </div>
        </Grid>
    );
};

Message.defaultProps = {
    message: true
};

Message.propTypes = {
    message: PropTypes.object
};

export default Message;
