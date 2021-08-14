import React, { useState } from 'react';
import { makeStyles, TextField, Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(/login_cover.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.grey[400],
        padding: theme.spacing(6),
        borderRadius: '5px',
        maxWidth: '500px',
        userSelect: 'none'
    },
    login: {
        display: 'flex',
        justifyContent: 'center'
    },
    textField: {
        backgroundColor: theme.palette.primary.main,
        fontSize: '14px',
        borderRadius: '5px',
        width: '100%'
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '30px',
        color: theme.palette.grey[600]
    },
    welcome: {
        paddingBottom: '5px',
        fontSize: '30px',
        color: theme.palette.grey[200]
    },
    form: {
        flexDirection: 'column',
        padding: '0'
    },
    email: {
        '& p': {
            paddingBottom: '10px'
        }
    },
    password: {
        '& p': {
            paddingTop: '10px',
            paddingBottom: '10px'
        }
    },
    button: {
        marginTop: '30px',
        width: '100%',
        backgroundColor: '#7382e0'
    }
}));

const Register = () => {
    const classes = useStyles();
    return (
        <>
            <header>
                <title>Login ChatApp</title>
                <meta name="description" content="Login UI for ChatApp" />
            </header>
            <main className={classes.root}>
                <Container className={classes.main}>
                    <div className={classes.header}>
                        <Typography variant="h6" component="p" color="textPrimary" className={classes.welcome}>
                            Creat an account!
                        </Typography>
                    </div>
                    <Container className={classes.form}>
                        <div className={classes.email}>
                            <Typography variant="h6" component="p">
                                Email
                            </Typography>
                            <TextField
                                id="email"
                                name="Email"
                                type="email"
                                variant="outlined"
                                className={classes.textField}
                            />
                        </div>
                        <div className={classes.password}>
                            <Typography variant="h6" component="p">
                                Username
                            </Typography>
                            <TextField
                                id="username"
                                name="username"
                                type="username"
                                variant="outlined"
                                className={classes.textField}
                            />
                        </div>

                        <div className={classes.password}>
                            <Typography variant="h6" component="p">
                                Password
                            </Typography>
                            <TextField
                                id="password"
                                name="Password"
                                type="password"
                                variant="outlined"
                                className={classes.textField}
                            />
                        </div>

                        <Button variant="contained" color="secondary" className={classes.button}>
                            Continue
                        </Button>
                    </Container>
                </Container>
            </main>
        </>
    );
};

export default Register;
