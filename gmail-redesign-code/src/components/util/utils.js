import { db } from "../../lib/firebase";
import { useLocalContext } from "../../context/context";

export const getDomainFromEmail = (email) => {
    let domain = email.split('@').pop()
    return domain
}


export const DBEvent = ( {eventName, currentUser, desired_ts = null} ) => {
  let ts = desired_ts !== null ? desired_ts : Date.now().toString()
  db.collection("Events")
  .doc(currentUser.email)
  .collection(ts.toString())
  .doc("data")
  .set({
    "eventName":eventName,
    "ts": ts.toString(),
    "ts_readable": ConvertEpochTimeToDate(ts),
  })
  .catch((err) => console.log("DB Clicked Error", err));
}

export const DBClicked = ( {buttonName, currentUser, mailState = null} ) => {
  let ts = Date.now().toString()
  db.collection("Type:Clicks")
  .doc(currentUser.email)
  .collection(ts.toString())
  .doc("data")
  .set({
    "button":buttonName,
    "ts": ts.toString(),
    "ts_readable": ConvertEpochTimeToDate(ts),
    "clicked": true,
    "mail_id": mailState === null ? ("null") : (mailState.state.id)
  })
  .catch((err) => console.log("DB Clicked Error", err));  
}
    


export const ConvertEpochTimeToDate = (epochTime) =>{
  // Example: '12/31/1970, 16:00:00'
  let options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false,
  };
  //console.log("ConvertEpochTimeToDate", epochTime)
  return Intl.DateTimeFormat('default',options).format(epochTime)
}

export const ConvertStringToEpochTime = (dateTime) =>{
  return Date.parse(dateTime)
}

export const ComputeHumanReadableDateShortFromEpoch = (epochTime) => {
  
  let date = new Date(epochTime)
  let now = new Date(Date.now())
  if (datesAreOnSameDay(date, now) === true){
    let options = {
      hour: 'numeric', minute: 'numeric',
      hour12: true,
    };
    return Intl.DateTimeFormat('default',options).format(date)
  } else {
    let options = {
      month: 'short', day: 'numeric',
    };
    return Intl.DateTimeFormat('default',options).format(date)
  }
}

export const ComputeHumanReadableDateFullFromEpoch = (epochTime) => {
  let options = {
    year: 'numeric', month: 'short', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false,
  };
  //console.log("ConvertEpochTimeToDate", epochTime)
  return Intl.DateTimeFormat('default',options).format(epochTime)
}


const datesAreOnSameDay = (first, second) => {
  return first.getFullYear() === second.getFullYear() &&
  first.getMonth() === second.getMonth() &&
  first.getDate() === second.getDate();
}

