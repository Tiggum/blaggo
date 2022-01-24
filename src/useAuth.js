import * as React from "react";
import axios from 'axios'

const authContext = React.createContext()

const useAuth = () => {
    const [authed, setAuthed] = React.useState(false)

    return {
        authed, 
        login(username, password) {
             
            return new Promise(res => {
                let data = {
                    "username": username,
                    "password": password
                  }
                  
                  var config = {
                    method: 'post',
                    url: 'https://blaggo-backend.herokuapp.com/user/login',
                    headers: { 
                      'Content-Type': 'application/json', 
                    },
                    data : data
                  };
                  
                  axios(config)
                  .then(res => {
                      if (res.data.status === 200) {
                          setAuthed(true)
                      }
                  })
                  .catch(function (error) {
                    console.log(error);
                  })
                  res()
            })
            
        },
        logout() {
            return new Promise((res) => {
                setAuthed(false)
                res()
            })
        }
    }
}

export const AuthProvider = ({children}) => {
    const auth = useAuth()

    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
} 

const AuthConsumer = () => {
    return React.useContext(authContext)
}

export default AuthConsumer