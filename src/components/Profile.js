import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

const Profile = () => {

    const {user, isAuthenticated} = useAuth0();

    return (
        isAuthenticated && (
            <div>
                <h1>Profile</h1>
                <div>
                    <img src={user.picture} alt={user.name} />
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            </div>
        )
    );
}

export default Profile
