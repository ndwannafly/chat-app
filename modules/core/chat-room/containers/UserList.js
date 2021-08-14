import React from 'react';
import Grid from '@material-ui/core/Grid';
import UserStatus from '@chat-room/components/UserStatus';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const users = [
    {
        username: 'user1',
        isOnline: true
    },
    {
        username: 'user2',
        isOnline: true
    },
    {
        username: 'user3',
        isOnline: false
    },
    {
        username: 'user4',
        isOnline: true
    },
    {
        username: 'user5',
        isOnline: false
    },
    {
        username: 'user6',
        isOnline: false
    },
    {
        username: 'user7',
        isOnline: false
    },
    {
        username: 'user8',
        isOnline: true
    }
];

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(2)
    },
    paginate: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2)
    },
    title: {
        color: theme.palette.grey[500],
        fontSize: '0.8rem',
        fontWeight: 600
    }
}));

const UserPaginate = ({ title, users }) => {
    const classes = useStyles();
    return (
        <Container component="div" className={classes.paginate} disableGutters>
            <Typography component="h6" className={classes.title}>
                {`${title} - ${users.length}`}
            </Typography>
            {users.map(({ username, isOnline }) => (
                <UserStatus username={username} isOnline={isOnline} />
            ))}
        </Container>
    );
};

const UserList = () => {
    const classes = useStyles();
    return (
        <Grid item lg={2} className={classes.root}>
            <UserPaginate title="ONLINE" users={users.filter((user) => user.isOnline)} />
            <UserPaginate title="OFFLINE" users={users.filter((user) => !user.isOnline)} />
        </Grid>
    );
};

export default UserList;
