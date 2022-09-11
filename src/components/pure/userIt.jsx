import React from 'react';
import { useParams } from 'react-router-dom';

const UserIt = () => {

    const params = useParams();
    return (
        <div>
            <h2>{params.userId}</h2>
        </div>
    );
}

export default UserIt;
