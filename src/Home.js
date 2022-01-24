import Column from './Column'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import useAuth from './useAuth'


const Home = () => {
    const { authed } = useAuth()



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
                <Column userid={1} />
            </Box>}

        </Box>
    )
}

export default Home