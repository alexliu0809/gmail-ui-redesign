import React from 'react'
import "./styles.css"
import { useLocalContext } from '../../context/context'
import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { DBClicked } from "../util/utils";

const Compose = () => {
    const {composeOpen, setcomposeOpen, currentUser} = useLocalContext();
    return (
        <div className='compose'>
            <div className='compose__container'>
                <div className='compose__header'>
                    <h4>
                        New Message
                    </h4>
                    <Close onClick={()=>{setcomposeOpen(false);DBClicked({currentUser:currentUser,buttonName:"composeClose"});}}>
                    </Close>
                </div>

                <input className='compose__input' placeholder='Recipents'>
                </input>

                <input className='compose__input' placeholder='Subject'>
                </input>

                <textarea className='compose__textarea'></textarea>
                
            </div>
        </div>
    )
}

/*
<div className='compose__footer'>
                    <div className='compose__footer__container'>
                        <Button className="compose_btn" color="primary" variant="contained">
                            Send
                        </Button>
                    </div>
                </div>
*/
export default Compose