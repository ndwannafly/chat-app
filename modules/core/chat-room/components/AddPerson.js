import React, { useEffect, useState } from 'react';
import { Checkbox, Dialog, DialogTitle, IconButton, InputBase, makeStyles } from '@material-ui/core';
import { PersonAdd } from '@material-ui/icons';
import { getAuthData, searchUser } from '@core/auth/reducer';
import { useDispatch, useSelector } from 'react-redux';
import UserFound from '@core/chat-room/components/UserFound';
import { getChatRoom } from '@core/chat-room/reducer';

const addPersonPaperProps = {
    style: {
        backgroundColor: '#2e3136',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        minWidth: '400px'
    }
};

const useStyles = makeStyles((theme) => ({
    userContainer: {
        color: theme.palette.grey[500],
        display: 'flex',
        flexDirection: 'column'
    },
    user: {
        color: theme.palette.grey[300],

        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            borderRadius: '5px'
        },
        padding: '10px'
    },
    title: {
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '0',
        marginBottom: '20px',
        '& h2': {
            fontWeight: '600',
            color: 'white'
        }
    },
    input: {
        marginBottom: '15px',
        backgroundColor: theme.palette.primary.dark,
        paddingLeft: '15px'
    }
}));

const users = [
    {
        username: 'user 1'
    },
    {
        username: 'user 2'
    },
    {
        username: 'user 3'
    },
    {
        username: 'user 4'
    },
    {
        username: 'user 5'
    }
];

const AddPerson = () => {
    const classes = useStyles();
    const { selectedRoom } = useSelector((state) => getChatRoom(state));
    const { searchedUsers } = useSelector((state) => getAuthData(state));
    const { username } = useSelector((state) => getAuthData(state)?.user);
    const [addPersonOpen, setAddPersonOpen] = useState(false);

    const [chooseUserList, setChooseUserList] = useState([]);
    const dispatch = useDispatch();
    // console.log(chooseUserList);
    useEffect(() => {
        // dispatch(searchUser({ keyword, chooseUserList, selectedRoom }));
    }, [chooseUserList]);
    const personAddClick = () => {
        setAddPersonOpen(true);
    };

    const closePersonAdd = () => {
        setAddPersonOpen(false);
    };

    const searchForFriends = (e) => {
        /*        console.log(e.target.value); //dispatch without keyword and chooseUserList
        const searchedUsers = users.filter((user) => user.username.includes(e.target.value)); */
        const keyword = e.target.value;
        /*        console.log(keyword);
        console.log(chooseUserList);
        console.log(selectedRoom); */
        // dispatch(searchUser({ keyword, chooseUserList, selectedRoom }));
    };
    const chooseUser = (e) => {
        const index = chooseUserList.indexOf(e.target.innerHTML);
        if (index > -1) {
            // includes
            const newList = [...chooseUserList];
            newList.splice(index, 1);
            setChooseUserList(newList);
            console.log(newList);
            return;
        }
        // non includes
        setChooseUserList([...chooseUserList, e.target.innerHTML]);
    };

    return (
        <>
            <IconButton onClick={personAddClick}>
                <PersonAdd />
            </IconButton>
            <Dialog open={addPersonOpen} onClose={closePersonAdd} PaperProps={addPersonPaperProps}>
                <DialogTitle className={classes.title}>Add Member</DialogTitle>
                <InputBase placeholder="Search for friends" onChange={searchForFriends} className={classes.input} />
                <div>
                    {chooseUserList.map((username) => {
                        return <div> {username} </div>;
                    })}
                </div>
                <div className={classes.userContainer}>
                    {searchedUsers
                        .filter((user) => user.username !== username)
                        .map((user) => {
                            return (
                                <div className={classes.user} onClick={chooseUser}>
                                    {user.username}
                                </div>
                            );
                        })}
                </div>
            </Dialog>
        </>
    );
};

export default AddPerson;
