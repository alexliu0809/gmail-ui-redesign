import { Avatar, Button, Checkbox, makeStyles, Tooltip } from "@material-ui/core";
import { MoreVert, Refresh, ArrowBack, ArrowDropDown, Block } from "@material-ui/icons";
import React, { useState } from "react";
import { useLocalContext } from "../../context/context";
import "./styles.css";
import {Via, Detail} from ".."
import { useNavigate,useParams } from "react-router-dom";
import { getDomainFromEmail, DBClicked } from "../util/utils";
import parse from 'html-react-parser'



const ViewMail = ({ mailState }) => {
  const { drawerOpen, currentUser, setshowVia, showVia, setviaAnchor, viaAnchor } = useLocalContext();
  const [ showDetails, setshowDetails ] = useState(false);
  const [ showDetailsAnchor, setshowDetailsAnchor ] = useState(null);

  const navigate = useNavigate();
  const {user_id} = useParams();

  const useStyles = makeStyles({
    tooltip: {
      fontSize: "0.9rem",
    },

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
        <ArrowBack onClick={() => {navigate(`/id/${user_id}/`);DBClicked({buttonName:"arrowBack",currentUser:currentUser});}}/>
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
                    <a className="viewMail__senderMail viewMail__senderMailVia"
                    onClick={(e) => {setshowVia(true);setviaAnchor(e.target);DBClicked({buttonName:"viewMailVia",currentUser:currentUser, mailState:mailState})}}
                    >via</a>
                    &nbsp;
                    {getDomainFromEmail(mailState.state.mailfrom)}
                  </p>
                  
                )
              }
              <Via 
              show={showVia}
              setShow={setshowVia}
              anchorEl={viaAnchor}
              setanchorEl={setviaAnchor}
              mailState={mailState}
              />
            </div>
            <p className="viewMail__info">to {
              /* mailState.state.participant_email === mailState.state.to ? ("me") : (`${mailState.state.to}`) */
              "me"
            }
              <Tooltip 
              title="Show details"
              placement="bottom"
              classes={{tooltip: classes.tooltip}}
              >
                <ArrowDropDown className={classes.myArrowDropDown}
                onClick={(e) => {setshowDetails(true); setshowDetailsAnchor(e.currentTarget); DBClicked({buttonName:"showDetails",currentUser:currentUser})}}
                />
              </Tooltip>
              <Detail 
              show={showDetails}
              setShow={setshowDetails}
              anchorEl={showDetailsAnchor}
              setanchorEl={setshowDetailsAnchor}
              mailState={mailState}
              />
            </p>
                        
          </div>

        </div>

        

        <div className="viewMail__bodyBtm">
          <div className="viewMail__bodyText">
            {
              mailState.state.file === null?
              (
                mailState.state.body
              ) : ( 
                <div dangerouslySetInnerHTML={ {__html: mailState.state.__html}} />
              )

            }
            
          </div >

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