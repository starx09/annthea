import React,  {useState} from "react";
import "../index.css";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import startingmusic from "../background/141 - 8 PM (Winter).mp3";

function Countdown (props){
  const [day, setDays] = useState();
  const [hour, setHours] = useState();
  const [min, setMinutes] = useState();
  const [sec, setSeconds] = useState();
  const [title,setTitle]= useState("Hellloo, Shoo shoo come back in ...");
  const [timer,setTimer]=useState(false);
  const [volume, setvolume]= useState(false);

var song = document.getElementById("backgroundMusic"); 
var countDownDate = new Date("Dec 3, 2023 02:17:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

if (distance < 0) {
  clearInterval(x);
  setTimer(true);
  setTitle("ITS TOOODAAY~");
}

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

setDays(days);
setHours (hours);
setMinutes(minutes);
setSeconds(seconds);
}, 1000);

function changeVolume(){
  if (volume === true){
  setvolume(false);
  song.pause();
}
  else { setvolume(true);
    song.play();
  }
}

return (
<div className="countdownFrame">
<audio id="backgroundMusic" autoPlay loop>
  <source src={startingmusic} type="audio/mp3"/>
  Your browser does not support the audio element.
  </audio>
<button className="volumeBox" onClick={changeVolume}>
  <div className="centeredIcon">

    {volume ? (
        <VolumeUpIcon className="volumebtn" style={{ height: "2em", width: "2em"}}/>
    ) : (
      <VolumeOffIcon className="volumebtn" style={{ height: "2em", width: "2em"}} />
    )}
  </div>
</button>

<div className="mainFrame">
<div className="mainTitle secFont">{title}</div>
<div className="countDown afterText secFont" id="countDown afterText">
{timer === true ? (<div className="message">Happy Birthday!</div>) : (<>

  <div id="days_0 " className="innumbers">{day}</div>
  <p className="dotdot">:</p>
  <div id="hours_0" className="innumbers" >{hour}</div>
  <p className="dotdot">:</p>
  <div id="minutes_0" className="innumbers">{min}</div>
  <p className="dotdot">:</p>
  <div id="seconds_0" className="innumbers">{sec}</div>
 
  <p  className="inunits">Days</p>
  <p className="dotdot"></p>
  <p  className="inunits">Hours</p>
  <p className="dotdot"></p>
  <p className="inunits">Mins</p>
  <p className="dotdot"></p>
  <p className="inunits">Secs</p>
 </>
)}
</div>

{timer === true ? (<button className="startBtn button" onClick={props.clicked}> START </button>) : (<></>)}

</div>
</div>

);
}
export default Countdown