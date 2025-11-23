import React, { useState } from 'react'
import { Container, TextField, Typography, Paper, Button, Stack, Avatar, IconButton } from '@mui/material'
import {CameraAltRounded} from "@mui/icons-material"
import { VisuallyHiddenInput } from '../components/styles/StyledComponent';
import {useFileHandler, useInputValidation} from "6pp"
import { usernameValidator } from '../utils/validators';
import toast from 'react-hot-toast';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleLogin =() => {
        setIsLogin((prev)=> !prev)};

    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("", usernameValidator);
    const password = useInputValidation("");

    const avatar = useFileHandler("single");

    const handleLogin = (e) => {
        e.preventDefault();

    };
    const handleSignUp = (e) => {
        e.preventDefault();
    };




    return (
        <div
        style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100%",
        
        }}
        >

                <Container
            component={"main"}
            maxWidth="xs"
            sx={
                {
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                }
            }
        >

            <Paper
                elevation={6}
                sx={{
                    padding: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {isLogin ? (
                    <>
                        <Typography variant='h5'>
                            Login
                        </Typography>

                        <form
                        style={{
                            width: "100%",
                            marginTop: "1rem"
                        }}
                        onSubmit={handleLogin}

                        >
                            <TextField 
                                required
                                fullWidth
                                label="Username" 
                                margin='normal' 
                                variant='outlined'
                                value={username.value}
                                onChange={username.changeHandler}
                            />

                            <TextField 
                                required
                                fullWidth
                                label="Password"
                                type='password'
                                margin='normal' 
                                variant='outlined'
                                value={password.value}
                                onChange={password.changeHandler}
                            />

                            <Button
                                variant='contained'
                                color='primary'
                                type='submit'
                                fullWidth
                            >
                                Login
                            </Button>

                            <Typography textAlign={"center"} m={"1rem"}>
                                OR
                            </Typography>

                            <Button
                                fullWidth
                                variant='text'
                                onClick={toggleLogin}
                            >
                                Sign-Up
                            </Button>


                        </form>

                    </>) : (<>
                        <Typography variant='h5'>
                            Sign Up
                        </Typography>

                        <form
                        style={{
                            width: "100%",
                            marginTop: "1rem"
                        }}

                        onSubmit={handleSignUp}
                        >
                            <Stack position={"relative"}
                            width={"10rem"}
                            margin={"auto"}>
                            <Avatar
                            sx={{
                                width: "10rem",
                                height: "10rem",
                                objectFit: "contain",
                                }}

                                src={avatar.preview}
                            />
                            <IconButton sx={{
                                position: "absolute",
                                bottom: "0",
                                right: "0",
                                }}
                                component="label"
                            
                            >
                                <>
                                <CameraAltRounded/>
                                <VisuallyHiddenInput type='file' onChange={avatar.changeHandler}/>
                                </>
                            </IconButton>
                            

                            </Stack>


                            
                            <TextField 
                                required
                                fullWidth
                                label="Name" 
                                margin='normal' 
                                variant='outlined'
                                value={name.value}
                                onChange={name.changeHandler}
                            />

                            <TextField 
                                required
                                fullWidth
                                label="Username" 
                                margin='normal' 
                                variant='outlined'
                                value={username.value}
                                onChange={username.changeHandler}
                            />
                            {
                                username.error && (
                                    <Typography color='error' variant='caption'>
                                        {username.error}
                                    </Typography>
                                )
                            }


                            <TextField 
                                required
                                fullWidth
                                label="Bio" 
                                margin='normal' 
                                variant='outlined'
                                value={bio.value}
                                onChange={bio.changeHandler}
                            />

                            <TextField 
                                required
                                fullWidth
                                label="Password"
                                type='password'
                                margin='normal' 
                                variant='outlined'
                                value={password.value}
                                onChange={password.changeHandler}
                            />

                            <Button
                                variant='contained'
                                color='primary'
                                type='submit'
                                fullWidth
                            >
                                Sign Up
                            </Button>

                            <Typography textAlign={"center"} m={"1rem"}>
                                OR
                            </Typography>

                            <Button
                                fullWidth
                                variant='text'
                                onClick={() => {
                                    toggleLogin();
                                }}
                            >
                                Login instead
                            </Button>


                        </form>

                    </>)}


            </Paper>


        </Container>
        </div>
    )
}

export default Login