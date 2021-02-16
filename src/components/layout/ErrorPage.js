import React from 'react';
import {Link} from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <h2>ERROR</h2>
            <Link to="/"><button className="btn btn-danger">main page</button></Link>
        </div>
    )
}

export default ErrorPage
