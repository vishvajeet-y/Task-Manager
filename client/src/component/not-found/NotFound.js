import React from 'react'


const NotFound=() => {
    return (
        <div className="container">
        <button className="btn btn-light" onClick={(e)=>(window.history.back())}>Go Back</button>
            <h1 className="display-4">Page Not Found</h1>
            <p className="lead">
            Sorry, This Page does not exist
             </p>
        </div>
    )
}

export default NotFound
