// import React from 'react';
// import { makeStyles } from '@material-ui/core';
// import Container from '@material-ui/core/Container';
// import Message from '@core/chat-room/components/Message';
// import PropTypes from 'prop-types';
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         backgroundColor: theme.palette.primary.light,
//         marginLeft: '0',
//         marginRight: '0'
//     }
// }));
//
// const MessageBox = ({ messages }) => {
//     const classes = useStyles();
//
//     return (
//         <Container component="div" className={classes.root} disableGutters>
//             {messages.map((message) => (
//                 <Message message={message} />
//             ))}
//         </Container>
//     );
// };
//
// MessageBox.defaultProps = {
//     messages: []
// };
//
// MessageBox.propTypes = {
//     messages: PropTypes.object
// };
//
// export default MessageBox;
