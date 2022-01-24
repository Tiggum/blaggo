import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { TextField, Button } from '@mui/material'

const NewPost = () => {
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = () => {
        if ( title === '' || content === '') {

        } else {

            var data = JSON.stringify({
                "title": title,
                "content": content
              });
              
              var config = {
                method: 'post',
                url: 'http://localhost:9001/post',
                headers: { 
                  'Content-Type': 'application/json', 
                },
                data : data, 
                withCredentials: true
              };
              
              axios(config)
              .then(function (response) {
                console.log(JSON.stringify(response.data));
                navigate('/')
              })
              .catch(function (error) {
                console.log(error);
              });
              
        }
    }

    return(
        <>
        <TextField
              margin="normal"
              required
              fullWidth
              name="title"
              label="Title"
              type="title"
              id="title"
              autoComplete="title"
              onBlur={e => setTitle(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="content"
              label="Content"
              type="content"
              id="content"
              autoComplete="content"
              onBlur={e => setContent(e.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button
              fullWidth
              component={Link}
              to='/'
              variant="text"
              sx={{ mt: 3, mb: 2 }}
            >
              Cancel
            </Button>
        </>
    )

}

export default NewPost