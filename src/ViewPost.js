import { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import axios  from 'axios'
import Typography from '@mui/material/Typography';


const ViewPost = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [edit, setEdit] = useState(false)


    const getPost = async () => {
        
        await axios.get(`http://localhost:9001/post/${id}`, {})
            .then(res => {
                setTitle(res.data[0].title)
                setContent(res.data[0].content)
                
            })
    }


    useEffect(() => {
        getPost()
    }, [])

    const handleDelete = () => {
        axios.delete(`http://localhost:9001/post/`, {
            id: id
        })
            .then(() =>
                navigate('/')
            )
    }

    const handlePatch = () => {
        axios.patch(`http://localhost:9001/post/`, {
            id: id,
            title: title,
            content: content
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
            <Button onClick={e => setEdit(!edit)}>
                Edit
            </Button>
            <Button onClick={handleDelete}>
                Delete
            </Button>
        </div>
    )

}

export default ViewPost