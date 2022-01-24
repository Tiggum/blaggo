import Column from './Column'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import useAuth from './useAuth'
import { useCookies } from 'react-cookie'


const Home = () => {
    const { authed } = useAuth()

    const [cookies, setCookie] = useCookies();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Box sx={{ flexDirection: 'column' }}>
                <Typography variant="h2">
                    Public Posts
                </Typography>
                <Column />
            </Box>

            {authed && <Box sx={{ flexDirection: 'column' }}>
                <Typography variant="h2">
                    My Posts
                </Typography>
                <Column userid={cookies.userid} />
            </Box>}

        </Box>
    )
}

export default Home