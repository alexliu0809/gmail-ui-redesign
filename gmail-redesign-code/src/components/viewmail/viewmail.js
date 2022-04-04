import { Avatar, Button, Checkbox, makeStyles } from "@material-ui/core";
import { MoreVert, Refresh, ArrowBack, ArrowDropDown, Block } from "@material-ui/icons";
import React from "react";
import { useLocalContext } from "../../context/context";
import "./styles.css";

import { useNavigate } from "react-router-dom";


const ViewMail = ({ mailState }) => {
  const { drawerOpen, currentUser } = useLocalContext();
  const navigate = useNavigate();
  const getDomainFromEmail = (email) => {
    let domain = email.split('@').pop()
    return domain
  }

  const useStyles = makeStyles({
    myArrowDropDown: {
      "vertical-align": "bottom",
      "fontSize": '1.0rem',
      "margin-bottom": "0.1rem",
      "cursor": "pointer",

      '&:hover': {
        "background": "#f2f2f2;",
        "margin-bottom": "0.1rem",
      },
  }})

  const classes = useStyles();

  return (
    <div className={`main ${!drawerOpen && "main--fullWidth"}`}>
      <div className="main__controlBtns">
        <ArrowBack onClick={() => {navigate("/")}}/>
        <> </>
        <Checkbox color="secondary" className="main__check" />
        <Refresh />
        <MoreVert />
      </div>

      <div className="viewMail__body">
        <h1 className="viewMail__heading">{mailState.state.subject}</h1>
        <div className="viewMail__senderDetails">
          <Avatar />
          <div className="viewMail__sender">
            <div className="viewMail__senderWrapper">
              <h1 className="viewMail__senderName">{mailState.state.from_name}</h1>
              <p className="viewMail__senderMail">{
              `<${mailState.state.from}>`} 
              </p> 
              { getDomainFromEmail(mailState.state.from) === getDomainFromEmail(mailState.state.mailfrom)
                ? ("") : (
                  <p className="viewMail__senderMail">
                    &nbsp;
                  <a className="viewMail__senderMail viewMail__senderMailVia">via</a>
                    &nbsp;
                    {getDomainFromEmail(mailState.state.mailfrom)}
                  </p>
                  
                )
              }

              
            </div>
            <p className="viewMail__info">to {
              mailState.state.participant_email === mailState.state.to ? ("me") : (`${mailState.state.to}`)
            }
              <ArrowDropDown className={classes.myArrowDropDown}/>
            </p>

            
            
          </div>
        </div>

        <div className="viewMail__bodyBtm">
          <p className="viewMail__bodyText">{mailState.state.body}</p>
          <Button variant="outlined" className="home__signOut">
            Reply
          </Button>

          <Button variant="outlined" className="home__signOut margin-left">
            Forward
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ViewMail;