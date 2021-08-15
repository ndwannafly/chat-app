import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { AddCircle, CardGiftcard, EmojiEmotions, GifTwoTone } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, getChatRoom } from '@core/chat-room/reducer';

const useStyles = makeStyles((theme) => ({
    chatInput: {
        color: theme.palette.primary.light,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: theme.spacing(2),
        padding: theme.spacing(1),
        borderRadius: '5px',
        backgroundColor: '#40444b',
        '& form': {
            flex: '1',
            '& input': {
                width: '100%',
                padding: '15px',
                background: 'transparent',
                border: 'none',
                outlineWidth: '0',
                color: 'white',
                fontSize: 'large'
            }
        }
    },
    button: {
        display: 'none'
    }
}));

const TypeBar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [content, setContent] = useState('');
    const { id } = useSelector((state) => getChatRoom(state)?.selectedRoom);
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(
            addMessage({
                content,
                id
            })
        );
    };
    return (
        <div className={classes.chatInput}>
            <AddCircle fontSize="large" />
            <form onSubmit={handleSubmit}>
                <input placeholder="Write Message" onChange={(event) => setContent(event.target.value)} />
                <button className={classes.button} type="submit">
                    Send Message
                </button>
            </form>
            <div>
                <CardGiftcard fontSize="large" />
                <GifTwoTone fontSize="large" />
                <EmojiEmotions fontSize="large" />
            </div>
        </div>
    );
};

export default TypeBar;
