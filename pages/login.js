import React, { useEffect, useState } from 'react';
import { makeStyles, TextField, Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import LoginPage from '@core/auth/Container/LoginPage';

const Login = () => <LoginPage />;

export default Login;
