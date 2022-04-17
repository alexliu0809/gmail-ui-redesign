import React from 'react'

import './styles.css'


export const ErrorPageNotFound = ({errorMessage=null, helpMessage=null}) => {

    return (
        <div className='error_home'>
            <h1>
                Error:
                <span style={{"color": 'red'}}>
                     &nbsp;cannot load page 
                </span>
            </h1>
            <br />
            <br />
            <h2>
                Please contact Alex Liu at e7liu@eng.ucsd.edu
            </h2>
        </div>
    )
}

export const ErrorNoInternet = ({errorMessage=null, helpMessage=null}) => {

    return (
        <div className='error_home'>
            <h1>
                Error:
                <span style={{"color": 'red'}}>
                     &nbsp; Unable to contact server (Internet error)
                </span>
            </h1>
            <br />
            <br />
            <h2>
                Please contact Alex Liu at e7liu@eng.ucsd.edu
            </h2>
        </div>
    )
}

export const ErrorSignUp = ({errorMessage=null, helpMessage=null}) => {

    return (
        <div className='error_home'>
            <h1>
                Firebase Sign Up Error:
                <span style={{"color": 'red'}}>
                     &nbsp; {errorMessage}
                </span>
            </h1>
            <br />
            <br />
            <h2>
                Please contact Alex Liu at e7liu@eng.ucsd.edu
            </h2>
        </div>
    )
}


export const ErrorSignIn = ({errorMessage=null, helpMessage=null}) => {

    return (
        <div className='error_home'>
            <h1>
                Firebase Sign In Error:
                <span style={{"color": 'red'}}>
                     &nbsp; {errorMessage}
                </span>
            </h1>
            <br />
            <br />
            <h2>
                Please contact Alex Liu at e7liu@eng.ucsd.edu
            </h2>
        </div>
    )
}