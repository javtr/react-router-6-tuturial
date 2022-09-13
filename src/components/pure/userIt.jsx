import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { getUser } from '../../users_data'

const UserIt = () => {

    const params = useParams();
    const user = getUser(parseInt(params.userId))
    const navigate = useNavigate();

    return (
        <div>
            <h3>{user.name}</h3>
            <h4>{user.username}</h4>
            <h4>{user.email}</h4>
            <h4>{user.phone}</h4>
            <h4>{user.website}</h4>
            <button onClick={()=>{navigate('/user/')}}>Volver</button>
        </div>
    );
}

export default UserIt;



