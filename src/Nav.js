import { useNavigate, Link } from "react-router-dom";
import useAuth from './useAuth'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const Nav = () => {
    const { authed, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Button variant='inherit' component={Link} to='/' >
                        Blaggo
                    </Button>
                    {authed && <Button variant='inherit' component={Link} to='/newpost'>
                        New Post
                    </Button>}

                    {!authed && <Button component={Link} to='/login' variant='text' color='inherit'>
                        Login
                    </Button>}

                    {authed && <Button variant='text' color='inherit' onClick={handleLogout}>
                        Log out
                    </Button>}

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Nav