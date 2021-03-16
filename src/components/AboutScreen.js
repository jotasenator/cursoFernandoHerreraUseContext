import React, { useContext } from 'react'
import { UserContext } from './UserContext'




export const AboutScreen = () => {

    const { setUser } = useContext(UserContext)

    return (
        <div>
            <h1>AboutScreen</h1>
            <hr />
            <button
                className='btn btn-danger'
                onClick={() => setUser({})}


            >
                Logout
            </button>
        </div>
    )
}
