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

export const ErrorNoID = ({errorMessage=null, helpMessage=null}) => {

    return (
        <div className='error_home'>
            <h1>
                Error:
                <span style={{"color": 'red'}}>
                     &nbsp; User ID doesn't exist.
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

export const ErrorScreenTooSmaller = ({errorMessage=null, helpMessage=null}) => {

    return (
        <div className='error_home'>
            <h1>
                Error:
                <span style={{"color": 'red'}}>
                     &nbsp; Your current screen (or window) is too small
                </span>
            </h1>
            <br />
            <br />
            <h2>
            Please use a laptop or a desktop with a bigger screen. If you are already on a laptop or desktop with a large screen, please maximize your browser size. You can drag a corner of the browser to a larger size, and then refresh the page. You can also try the directions below to enlarge the browser. <br></br>
            <br></br>
            <span style={{"color":"blue","font-weight":"bold"}}>Mac Users</span>: On your Mac, do the following to maximize a window: Press and hold the Option key while you click the green button in the top-left corner of an app window. Then refresh the page. <br></br> (from <a href='https://support.apple.com' target="_blank">support.apple.com</a>)<br></br><br></br>
            <span style={{"color":"blue","font-weight":"bold"}}>PC Users</span>: On your PC, do the following to maximize a window: Press the square button at the top right corner of the browser. You can also Press F11 or Fn and F11 at the same time. Then refresh the page. <br></br>(from <a href='https://computerhope.com' target="_blank">computerhope.com</a>) <br></br><br></br>

            If you try the directions mentioned above and still have an issue, please send a message to Alex Liu at e7liu@eng.ucsd.edu for any questions.
            </h2>
        </div>
    )
}