import React, {useState} from "react";
import App from "./app";
import Countdown from "./countdown";
import End from "./ending";

function Index (){
const [showApp, setshowApp ]= useState(false);
const [showEnd, setShowEnd]= useState(false);
const  [replay,setReplay]= useState(false);

function clicked() {
    setshowApp(true);
  }

function ending(){
  setShowEnd(true);
}
function replaying(){
  setReplay(true);
}

return(
<>
{replay ? <App/>: " "}
{showEnd ? (<End replay={replaying}/>) : " " }
{showApp ? ( <App end={ending}/> ) : ( <Countdown clicked={clicked}/>)}


  </>
);
}

export default Index