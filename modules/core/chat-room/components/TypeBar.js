import React from 'react';
import { makeStyles } from '@material-ui/core';
import { AddCircle, CardGiftcard, EmojiEmotions, GifTwoTone } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    chatInput: {
        color: theme.palette.primary.light,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '15px',
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

    return (
        <div className={classes.chatInput}>
            <AddCircle fontSize="large" />
            <form>
                <input placeholder="Write Message" />
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
