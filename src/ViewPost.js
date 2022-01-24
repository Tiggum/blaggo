import { useEffect, useState } from 'react'
import { Button, TextField, Card, CardContent } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Typography from '@mui/material/Typography';
import useAuth from './useAuth'
import { useCookies } from 'react-cookie';


const ViewPost = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [cookies] = useCookies();
    const { authed } = useAuth()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userid, setUserid] = useState(0)
    const [edit, setEdit] = useState(false)
    const [creationTime, setCreationTime] = useState('')

    const getPost = async () => {

        await axios.get(`https://blaggo-backend.herokuapp.com/api/post/${id}`, { withCredentials: true })
            .then(res => {
                setTitle(res.data[0].title)
                setContent(res.data[0].content)
                setUserid(res.data[0].userid)
                setCreationTime(res.data[0].creationtime)
            })
    }


    useEffect(() => {
        getPost()
    }, [])


    const handleDelete = () => {
        axios({
            method: 'delete',
            url: 'https://blaggo-backend.herokuapp.com/api/post',
            data: {
                id: id,
                userid: cookies.userid
            },
            withCredentials: true
        }).then(() => {
            navigate('/')
        })
    }

    const handlePatch = () => {
        axios({
            method: 'patch',
            url: 'https://blaggo-backend.herokuapp.com/api/post',
            data: {
                id: id,
                title: title,
                content: content,
                userid: cookies.userid
            },
            withCredentials: true
        }).then(() => {
            navigate('/')
        })

    }

    return (
        <Card variant="outlined" sx={{ m: 1, flexGrow: 1, display: 'flex' }}>
            <CardContent>
                {edit ? <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="title"
                    label="Title"
                    type="title"
                    id="title"
                    autoComplete="title"
                    onBlur={e => setTitle(e.target.value)}
                /> :
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                }
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {creationTime}
                </Typography>

                {edit ? <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="content"
                    label="Content"
                    type="content"
                    id="content"
                    autoComplete="content"
                    onBlur={e => setContent(e.target.value)}
                /> :
                    <Typography variant="body2">
                        {content}
                    </Typography>
                }

            </CardContent>


            {edit && <Button onClick={handlePatch}>
                Submit
            </Button>}
            {authed && userid == cookies.userid && <Button onClick={e => setEdit(!edit)}>
                Edit
            </Button>}

            {authed && userid == cookies.userid && <Button onClick={handleDelete}>
                Delete
            </Button>}

        </Card>
    )

}

export default ViewPost