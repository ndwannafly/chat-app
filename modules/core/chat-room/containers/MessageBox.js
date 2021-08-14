import React from 'react';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Message from '@chat-room/components/Message';
import TypeBar from '@chat-room/components/TypeBar';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.light,
        marginLeft: '0',
        marginRight: '0'

    }
/*    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }*/
}));

const MessageBox = ({ messages }) => {
    const classes = useStyles();

    return (
        <Container component="div" className={classes.root} disableGutters>
            {messages.map((message) => (
                <Message message={message} />
            ))}
        </Container>
    );
};

export default MessageBox;
