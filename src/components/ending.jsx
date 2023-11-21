import React from "react";
import "../index.css";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import ReplayIcon from '@mui/icons-material/Replay';
import App from "./app";

function End(props){

return(
<div className ="fullFrame">
<div className="theEndFrame">
<hr></hr>
<p className="theEnd secFont"> T H E    E N D! </p>
<hr></hr>
</div>

<div className ="endingFrame"></div>

<div className="strtAgn">
<button type= "button" onClick={props.replay} className= "button hover againbtn" data-toggle= "button" aria-pressed="false" autoComplete="off">
<ReplayIcon className= "replayIcon"/>REPLAY</button>
</div>

</div>
);
}

export default End