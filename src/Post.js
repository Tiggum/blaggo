import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';


const Post = ({ userid, content, title, creationtime}) => {


    return (
<Card variant="outlined" sx={{ maxWidth: 345 }}>
<CardContent>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {creationtime}
      </Typography>
      <Typography variant="body2">
        {content}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">View</Button>
    </CardActions>
    </Card>
    )
}

export default Post