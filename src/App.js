import {Link, Routes, Route} from 'react-router-dom'
import Nav from './Nav'
import RequireAuth from './RequireAuth'
import Login from './Login'
import Home from './Home'
import Register from './Register'
import User from './User'
import NewPost from './NewPost'
import ViewPost from './ViewPost'

const App = () => {
  
  
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
        <Route path="/newpost" element={<NewPost />}/>
        <Route path="/viewpost/:id" element={<ViewPost />} />
      </Routes>

      
    </div>
  );
}

export default App;
