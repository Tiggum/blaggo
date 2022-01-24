import { useNavigate } from "react-router-dom"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react'
import axios from "axios";

const theme = createTheme();


const Register = () => {
    const navigate = useNavigate()

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [taken, setTaken] = useState(false)

    const handleRegister = () => {
        if ( firstname === '' || lastname === '' || username === '' || password === ''){

        } else {
            axios({
                method: 'post',
                url: 'https://blaggo-backend.herokuapp.com/api/user/register',
                headers: {
                  'Content-Type': ' application/json'
                },
                data: {
                  'username': username,
                  'password': password,
                  'firstname': firstname,
                  'lastname': lastname
                }
              }).then(() => {
     
                    navigate('/login')
              }).catch(() => setTaken(true))
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        { taken && <Typography component="h1" variant="h5">
                        Username taken try again
                    </Typography>}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            onBlur={e => setUsername(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onBlur={e => setPassword(e.target.value)}

                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="firstname"
                            label="First Name"
                            type="firstname"
                            id="firstname"
                            autoComplete="firstname"
                            onBlur={e => setFirstname(e.target.value)}

                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="lastname"
                            label="Last Name"
                            type="lastname"
                            id="lastname"
                            autoComplete="lastname"
                            onBlur={e => setLastname(e.target.value)}

                        />

                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleRegister}
                        >
                            Register
                        </Button>
                        <Grid container>
                            <Grid item xs>
                            </Grid>
                            <Grid item>
                                <Button component={Link} to='/login' variant="text">
                                    {"Already have an account? Log in."}
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Register