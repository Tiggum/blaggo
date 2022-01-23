import {Link, Routes, Route} from 'react-router-dom'
import Nav from './Nav'
import RequireAuth from './RequireAuth'
import Login from './Login'
import Post from './Post'

const Home = () => <h1>Home(Public)</h1>
const Profile = () => <h1>Profile(Private)</h1>


const App = () => {
  
  
  return (
    <div>
      <Post userid='1' title='First' content='first post' creationtime='today'/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={
        <RequireAuth>
          <Profile />
        </RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
