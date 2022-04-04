import React from 'react'
import { useLocalContext } from '../../context/context'
import { Header, Sidebar, Compose, Main, ViewMail} from "..";
import { Popover, makeStyles } from '@material-ui/core'


import './styles.css'

// PaperProps: Size of the container
// Todo: format the content with div: via__popoverContainer

const Via = ({show=false, setShow, anchorEl=null, setanchorEl, mailState}) => {

    const handleClose = () => {
        setShow(false);
        setanchorEl(null);
    };

    return (
            <Popover className='via__popover'
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

                <div className='via__popoverContainer'>
                    Via
                </div>


            </Popover>
    )
}

export default Via