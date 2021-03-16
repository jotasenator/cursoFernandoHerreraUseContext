import React, { useContext } from 'react'
import { UserContext } from './UserContext'



export const LoginScreen = () => {

    const { setUser } = useContext(UserContext)

    const array = {
        id: 1234,
        name: 'Maykel'
    }
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button
                className='btn btn-primary'
                onClick={() => setUser(array)}

            >
                Login
            </button>




        </div >
    )
}
