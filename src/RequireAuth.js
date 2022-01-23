import useAuth from './useAuth'
import { Navigate } from "react-router-dom"

const RequireAuth = ({ children }) => {
    const { authed } = useAuth()
    console.log(authed)
    return authed === true ? children : <Navigate to='/login' replace/>
}

export default RequireAuth