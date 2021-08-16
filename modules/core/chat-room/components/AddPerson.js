import React, { useState } from 'react';
import { Dialog, DialogTitle, IconButton, InputBase } from '@material-ui/core';
import { PersonAdd } from '@material-ui/icons';
import { getAuthData, searchUser } from '@core/auth/reducer';
import { useDispatch, useSelector } from 'react-redux';

const addPersonPaperProps = {
    style: {
        backgroundColor: '#2e3136'
    }
};

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
    const { searchedUsers } = useSelector((state) => getAuthData(state));
    const [addPersonOpen, setAddPersonOpen] = useState(false);
    const dispatch = useDispatch();

    const personAddClick = () => {
        setAddPersonOpen(true);
    };

    const closePersonAdd = () => {
        setAddPersonOpen(false);
    };

    const searchForFriends = (e) => {
        console.log(e.target.value);
        const searchedUsers = users.filter((user) => user.username.includes(e.target.value));
        // console.log(searchedUsers);
        dispatch(searchUser({ searchedUsers }));
    };

    return (
        <>
            <IconButton onClick={personAddClick}>
                <PersonAdd />
            </IconButton>
            <Dialog open={addPersonOpen} onClose={closePersonAdd} PaperProps={addPersonPaperProps}>
                <DialogTitle>Add Member</DialogTitle>
                <InputBase placeholder="Search for friends" onChange={searchForFriends} />
                <div>
                    {searchedUsers.map((user) => {
                        return <div> {user.username} </div>;
                    })}
                </div>
                <div />
            </Dialog>
        </>
    );
};

export default AddPerson;
