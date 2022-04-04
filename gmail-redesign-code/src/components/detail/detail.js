import React from 'react'
import { useLocalContext } from '../../context/context'
import { Header, Sidebar, Compose, Main, ViewMail} from "..";
import { Popover, makeStyles } from '@material-ui/core'


import './styles.css'

// PaperProps: Size of the container
// Todo: format the content with div: detail__popoverContainer

const Detail = ({show=false, setShow, anchorEl, setanchorEl, mailState}) => {

    const handleClose = () => {
        setanchorEl(null);
        setShow(false);
    };

    return (
            <Popover className='detail__popover'
            open={show}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            PaperProps={{
                style: { width: '300px', height: '300px' },
            }}
            onClose={handleClose}
            >




                <div className='detail__popoverContainer'>
                    <p> Email: {mailState.state.from} </p>
                    <p> Name: {mailState.state.from_name} </p>
                    <p> To: {mailState.state.to} </p>
                </div>



            </Popover>
    )
}

export default Detail