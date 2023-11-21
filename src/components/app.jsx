import React,  {useState, useEffect} from "react";
import "../index.css";
import convodata from "../text.json";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

import bg4 from "../background/4.png";
import bg5 from "../background/5.png";
import bg6 from "../background/6.png";
import bg7 from "../background/7.png";
import bg8 from "../background/8.png";
import bg9 from "../background/9.png";
import bg10 from "../background/10.png";
import bg11 from "../background/11.png";
import bg12 from "../background/12.png";
import bg13 from "../background/13.png";
import bg14 from "../background/14.png";
import bg15 from "../background/15.png";
import bg16 from "../background/16.png";
import bg17 from "../background/17.png";
import bg18 from "../background/18.png";
import bg19 from "../background/19.png";
import bg20 from "../background/20.png";
import bg21 from "../background/21.png";
import bg22 from "../background/22.png";
import bg23 from "../background/23.png";

import meimei from "../background/meimei.png";
import dajie from "../background/dajie.png";
import homedajie from "../background/homedajie.png";
import storekeeper from "../background/storekeeper.png";

import m2 from "../background/077 - 2 AM (Cherry).mp3";
import m3 from "../background/078 - 3 AM (Cherry).mp3";
import m4 from "../background/079 - 4 AM (Cherry).mp3";
function App(props) {

const [backgroundImage,setbackgroundImage]= useState();
const [sceneText,setsceneText]= useState(-1);
const [charaName , setcharaName] = useState(" ");
const [charaImg , setcharaImg] = useState( );
const [text , setText] = useState();
const [startTyping, setStartTyping] = useState(false);
const [buttons, setButtons]= useState();
const [volume, setVolume]= useState(false);
const songList = [m2,m3,m4];
const randomNumber = Math.floor(Math.random() * 4);
const [audio, setAudio] = useState(songList[randomNumber]);
var song = document.getElementById("backgroundMusic"); 

useEffect(() => {
    
var audioElement = new Audio(audio);
function playNextSong() {
    const randomNum = Math.floor(Math.random() * 3);
    setAudio(songList[randomNum]);
  }

audioElement.addEventListener("ended", playNextSong);  

if (sceneText <= 24){
    console.log(sceneText);
changeBackground(sceneText);    
changeButtons(sceneText);    
changecharaName(sceneText);

if (startTyping) {
    changetext(sceneText);
    setStartTyping(false);
    }
} else {return (props.end);
}}, [startTyping, sceneText]);

function filterplusOne(){
if (buttons === " "){
        plusOne();
    }}

function plusOne() {
    setsceneText(sceneText + 1);
    setStartTyping(true);}

function changeBackground(){
switch (true) {
    case sceneText <= 1:
        setbackgroundImage(bg5);
       break;
    case sceneText <= 3:
        setbackgroundImage(bg6);
        break;
    case sceneText <=  5:
        setbackgroundImage(bg7);
        break;
    case sceneText <= 7:
        setbackgroundImage(bg8);
        break;
    case sceneText === 8:
        setbackgroundImage(bg9);
        break;
    case sceneText <= 10:
        setbackgroundImage(bg10);
        break;
    case sceneText === 11:
        setbackgroundImage(bg11);
        break;
    case sceneText <= 13:
        setbackgroundImage(bg12);
        break;
    case sceneText === 14:
        setbackgroundImage(bg13);
        break;
    case sceneText === 15:
        setbackgroundImage(bg14);
        break;
    case sceneText === 16:
        setbackgroundImage(bg15);
        break;
    case sceneText === 17:
        setbackgroundImage(bg16);
        break;
    case sceneText <= 19:
        setbackgroundImage(bg17);
        break;
    case sceneText <= 21:
        setbackgroundImage(bg18);
        break; 
    case sceneText === 22:
        setbackgroundImage(bg19);
        
        setTimeout(() => {
            setbackgroundImage(bg20);
          }, 1000);
        
          setTimeout(() => {
            setbackgroundImage(bg21);
          }, 2000);
          setTimeout(() => {
            setbackgroundImage(bg22);
          }, 3000);
        break;
    case sceneText === 23:
        setbackgroundImage(bg22);
        break;

    case sceneText === 24:
        setbackgroundImage(bg23);
        break;
        
    default:
        setbackgroundImage(bg4);
    };
 }         

  function changetext() {
    const targetText = convodata.convodata[sceneText];
    let currentText = "";
    let currentIndex = 0;

    const updateText = () => {
      if (currentIndex < targetText.length) {
        currentText += targetText[currentIndex];
        setText(currentText);
        currentIndex++;
        setTimeout(updateText, 30); // Adjust the delay as needed
      } else {
        setStartTyping(false); // Typing is finished
      }
    };
    updateText();
  }

function changecharaName(){
switch (true) {
    case (sceneText >= 14 && sceneText <= 21):
       setcharaName("STEVE [storekeeper]");
       setcharaImg(storekeeper);
       break;
    case (sceneText === 6 || sceneText === 8 || sceneText === 9 || sceneText === 10 || sceneText === 11):
        setcharaName("LUCAS [storekeeper]");
        setcharaImg(storekeeper);
        break;
    case (sceneText === -1 || sceneText === 0 ):
        setcharaName("ANN");
        setcharaImg(homedajie);
        break;   
    case ( sceneText === 7 || sceneText === 22):
        setcharaName("ANN");
        setcharaImg(dajie);
        break;
     default:
        setcharaName("Meimei");
        setcharaImg(meimei);
    };
}

function changeButtons (){
switch(true){
    case sceneText === 3:
        setButtons(
        <button type="button" onClick={plusOne} className="button hover" style={{top: "30%", left: "62%", position: "fixed", height: "auto",width:"auto"}} data-toggle="button" aria-pressed="false" autoComplete="off">
        OPEN</button>);
        
        break;
    case sceneText === 5:
        setButtons(
        <button type="button" onClick={plusOne} className="button hover" style={{top: "40%", left: "65%", position: "fixed", height: "auto",width:"auto"}} data-toggle="button" aria-pressed="false" autoComplete="off">
        ENTER</button>);
        break;

    case sceneText ===11:
        setButtons(
        <button type="button" onClick={plusOne} className="button hover" style={{top: "55%", left: "70%", position: "fixed", height: "auto",width:"auto"}} data-toggle="button" aria-pressed="false" autoComplete="off">
        EXIT TO STREET</button>);
        break;

    case sceneText === 13:
        setButtons(
        <button type="button" onClick={plusOne} className="button hover" style={{top: "49%", left: "33%", position: "fixed", height: "auto",width:"auto"}} data-toggle="button" aria-pressed="false" autoComplete="off">
        ENTER</button>);
        break;

    case sceneText === 19:
        setButtons(
        <button type="button" onClick={plusOne} className="button" style={{top: "32%", left: "45%", position: "fixed", height: "135px" ,width:"85px" ,backgroundColor:"transparent", border: "0" ,}} data-toggle="button" aria-pressed="false" autoComplete="off">
        </button>);
        break;

   case sceneText === 21:
        setButtons(
        <button type="button" onClick={plusOne} className="button hover" style={{top: "58%", left: "70%", position: "fixed", height: "auto",width:"auto"}} data-toggle="button" aria-pressed="false" autoComplete="off">
        GO HOME</button>);
        break;
     
    case sceneText === 23:
        setButtons(
        <button type="button" onClick={plusOne} className="button hover" style={{top: "48%", left: "56%", position: "fixed", backgroundColor:"transparent",height: "auto",width:"auto"}} data-toggle="button" aria-pressed="false" autoComplete="off">
        OPEN</button>);
        break;            
    default:
    setButtons(" ");
    };
}

function changeVolume() {
    if (volume === true) {
      setVolume(false);
      if (!song.paused) {
        song.pause();
      }
    } else {
      setVolume(true);
      if (song.paused) {
        song.play();
      }
    }
  }
  
  

return ( 
<div className="containerMain" onClick={filterplusOne} onKeyDown={filterplusOne} id="containerMain" style={{ backgroundImage: `url(${backgroundImage})`}}>
<audio id="backgroundMusic" loop>
  <source src={audio} type="audio/mp3" />
  Your browser does not support the audio element.
</audio>
<button className="volumeBox" onClick={(e) => {
    e.stopPropagation();  
    changeVolume();
  }}>
<div className="centeredIcon">
    {volume ? (
        <VolumeUpIcon className="volumebtn" style={{ height: "2em", width: "2em"}}/>
    ) : (
      <VolumeOffIcon className="volumebtn" style={{ height: "2em", width: "2em"}} />
    )}
</div>
</button>

{buttons}
    <div className="charaText">
     
      <div className="charaFrame">
      <img src= {charaImg} className="charaImg" alt ="Charcter Img" />
      </div>
      
      <div  className="charaNameNText">
      <h2 className="charaName">{charaName? charaName :" "}</h2>
      <p className="convoText" id="convoText">{text? text : " "}</p>
      </div>
    </div>
</div>
);
}

export default App


