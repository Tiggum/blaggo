import { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import axios  from 'axios'
import Typography from '@mui/material/Typography';
import useAuth from './useAuth'
import { useCookies } from 'react-cookie';


const ViewPost = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [cookies] = useCookies();
    const {authed} = useAuth()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [edit, setEdit] = useState(false)


    const getPost = async () => {
        
        await axios.get(`/api/post/${id}`, {withCredentials: true})
            .then(res => {
                setTitle(res.data[0].title)
                setContent(res.data[0].content)
            })
    }


    useEffect(() => {
        getPost()
    }, [])

    const handleDelete = () => {
        axios({
            method: 'delete',
            url: '/api/post',
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
            url: '/api/post',
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
        <div>
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
                <Typography>
                    {title}
                </Typography>
            }

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
                <Typography>
                    {content}
                </Typography>
            }

            {edit && <Button onClick={handlePatch}>
                Submit
            </Button>}
            { authed  && <Button onClick={e => setEdit(!edit)}>
                Edit
            </Button>}
            <Button onClick={handleDelete}>
                Delete
            </Button>
        </div>
    )

}

export default ViewPost