import { db } from "../../lib/firebase";
import { useLocalContext } from "../../context/context";

export const getDomainFromEmail = (email) => {
    let domain = email.split('@').pop()
    return domain
}


export const DBViaClicked = ( {currentUser, mailState} ) => {
    console.log(DBViaClicked, mailState.state)
    db.collection("viaClicks")
      .doc(currentUser.email)
      .collection("mails")
      .doc(mailState.state.id.toString())
      .set({
        "id": mailState.state.id,
        "timestamp": Date.now(),
        "clicked": true,
      })
      .catch((err) => console.log("dbViaClicked Error", err));
  };