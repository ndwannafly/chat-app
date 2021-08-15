import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Button, makeStyles, TextField } from '@material-ui/core';
import Link from 'next/link';
import { fetchToken, getAuthData } from '../reducer';

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
    register: {
        fontSize: '20px',
        paddingTop: '25px',
        '& a': {
            color: 'white',
            paddingLeft: '10px'
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

const LoginPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { token } = useSelector((state) => getAuthData(state));

    const router = useRouter();

    useEffect(() => {
        if (token) {
            window.localStorage.setItem('token', token);
            router.push('/chat-room');
        }
    }, [router, token]);

    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchToken({ identifier: username, password }));
    };

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
                            Welcome Back!
                        </Typography>
                        <Typography component="p">We're so excited to see you again!</Typography>
                    </div>
                    <form onSubmit={loginSubmit}>
                        <Container className={classes.form}>
                            <div className={classes.email}>
                                <Typography variant="h6" component="p">
                                    Username
                                </Typography>
                                <TextField
                                    id="username"
                                    name="Username"
                                    variant="outlined"
                                    className={classes.textField}
                                    onChange={(event) => setUsername(event.target.value)}
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
                                    onChange={(event) => setPassword(event.target.value)}
                                    className={classes.textField}
                                />
                            </div>

                            <Button variant="contained" color="secondary" type="submit" className={classes.button}>
                                Login
                            </Button>

                            <div className={classes.register}>
                                <span>Need an account?</span>
                                <Link href="/register">
                                    <a>Register</a>
                                </Link>
                            </div>
                        </Container>
                    </form>
                </Container>
            </main>
        </>
    );
};

export default LoginPage;
