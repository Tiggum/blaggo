import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom'


const Post = ({ userid, content, title, creationtime, id}) => {

    let str = content

    if (content.length > 100) {
        str = content.slice(0, 100) + '...'
    }

    return (
<Card variant="outlined" sx={{ m: 1, flexGrow: 1, display: 'flex' }}>
<CardContent>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {creationtime}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {userid}
      </Typography>
      <Typography variant="body2">
        {str}
      </Typography>
    </CardContent>
    <CardActions>
      <Link to={`/viewpost/${id}`} >View</Link>
    </CardActions>
    </Card>
    )
}

export default Post