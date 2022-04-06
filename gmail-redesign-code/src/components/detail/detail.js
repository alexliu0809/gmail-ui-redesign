import React from 'react'
import { useLocalContext } from '../../context/context'
import { Header, Sidebar, Compose, Main, ViewMail} from "..";
import { Popover, makeStyles } from '@material-ui/core'

import { getDomainFromEmail } from "../util/utils";

import './styles.css'

// PaperProps: Size of the container
// Todo: format the content with div: detail__popoverContainer

const Detail = ({show=false, setShow, anchorEl, setanchorEl, mailState}) => {

    const handleClose = () => {
        setanchorEl(null);
        setShow(false);
    };

    return (
                <Popover 
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
                onClose={handleClose}
                PaperProps={{
                    style: {"min-width": "360px;",
                    "outline": "none",
                    "background-color": "#fff",
                    "box-sizing": "border-box",
                    "cursor": "auto",
                    "max-height": "360px",
                    "max-width": "50%",
                    "min-width": "360px",
                    "width": "fit-content",
                    "height": "fit-content",
                    "overflow": "auto",
                    "position": "absolute",
                    "z-index": "10",
                    "box-shadow": "0 2px 4px rgba(0,0,0,0.2)",
                    "border": "1px solid rgba(0,0,0,0.2)",
                    "padding": "5px",
                    },
                }}
                >
                        <div>

                        
                        <div className='detail__wrapper' tabIndex="-1">
                            <table class="detail__table" cellPadding="0">
                                <tbody>
                                    <tr class="detail__table__tr">
                                        <td colSpan="2" tabIndex="0" class="detail__table__tr__tdheader">
                                            <span class="detail__outter__most__span">from:
                                            </span>
                                        </td>
                                        <td colSpan="2" tabIndex="0" class="detail__table__tr__tdcontent">
                                            <span class="detail__outter__most__span">
                                                <span translate="no" role="gridcell" tabIndex="-1">
                                                    <span class="detail__span__from__name">
                                                        <span>
                                                            {mailState.state.from_name}
                                                        </span>
                                                    </span> 
                                                    <span class="detail__span__from__email">
                                                        <span aria-hidden="true">&nbsp;&lt;
                                                        </span>
                                                        {mailState.state.from}
                                                        <span aria-hidden="true">
                                                            &gt;
                                                        </span>
                                                    </span> 
                                                </span>
                                            </span>
                                        </td>
                                    </tr>

                                    <tr class="detail__table__tr">
                                        <td colSpan="2" tabIndex="0" class="detail__table__tr__tdheader">
                                            <span class="detail__outter__most__span">to:</span>
                                        </td>
                                        <td colSpan="2" tabIndex="0" class="detail__table__tr__tdcontent">
                                            <span class="detail__outter__most__span">
                                                <span>
                                                    {mailState.state.to}
                                                </span>
                                            </span>
                                        </td>
                                    </tr>

                                    <tr class="detail__table__tr">
                                        <td colSpan="2" tabIndex="0" class="detail__table__tr__tdheader">
                                            <span class="detail__outter__most__span">date:</span>
                                        </td>
                                        <td colSpan="2" tabIndex="0" class="detail__table__tr__tdcontent">
                                            <span class="detail__outter__most__span">
                                                {mailState.state.date}
                                            </span>
                                        </td>
                                    </tr>

                                    <tr class="detail__table__tr">
                                        <td colSpan="2" tabIndex="0" class="detail__table__tr__tdheader">
                                            <span class="detail__outter__most__span">
                                            subject:
                                            </span>
                                        </td>
                                        <td colSpan="2" tabIndex="0" class="detail__table__tr__tdcontent">
                                            <span class="detail__outter__most__span">
                                            {mailState.state.subject}
                                            </span>
                                        </td>
                                    </tr>

                                    <tr class="detail__table__tr">
                                        <td colSpan="2" tabIndex="0" class="detail__table__tr__tdheader">
                                            <span class="detail__outter__most__span">
                                            mailed-by:
                                            </span>
                                        </td>
                                        <td colSpan="2" tabIndex="0" class="detail__table__tr__tdcontent">
                                            <span class="detail__outter__most__span">
                                                {getDomainFromEmail(mailState.state.mailfrom)}
                                            </span>
                                        </td>
                                    </tr>


                                    <tr class="detail__table__tr">
                                        <td colSpan="2" tabIndex="0" class="detail__table__tr__tdheader">
                                            <span class="detail__outter__most__span">
                                            signed-by:
                                            </span>
                                        </td>
                                        <td colSpan="2" tabIndex="0" class="detail__table__tr__tdcontent">
                                            <span class="detail__outter__most__span">
                                                <span>
                                                <img class="detail__table__image" src="/assets/cleardot.gif" alt="" /> 
                                                    Standard encryption (TLS)&nbsp;
                                                </span> 
                                                <a class="detail__table__a" href="https://support.google.com/mail?hl=en&amp;p=tls&amp;authuser=3" target="_blank">Learn more</a>
                                            </span>
                                        </td>
                                    </tr>
                                
                                </tbody>
                                

                            </table>
                        </div>
                        </div>
                </Popover>
            
    )
}

export default Detail