import axios from 'axios'
import Post from './Post'
import { useEffect, useState } from 'react'

const Column = ({userid}) => {
    
    const [posts, setPosts] = useState([])
    const [list, setList] = useState([])


    useEffect(() => {
        console.log(userid)

        if (userid !== undefined) {
            axios.get(`https://blaggo-backend.herokuapp.com/api/post?userid=${userid}`).then(res => setPosts(res.data))
        } else {
            axios.get(`https://blaggo-backend.herokuapp.com/api/post`).then(res => setPosts(res.data))
        }

         
    }, [])

    useEffect(() => {
        setList(posts.map((post) => <Post title={post.title} content={post.content} userid={post.userid} creationtime={post.creationtime} id={post.id}/>))
    }, [posts])

    

    return (
        <div>
            {list}
        </div>
    )
}

export default Column