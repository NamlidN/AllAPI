import { useState } from 'react';
import './SpaceGame.css';

let SpaceSPAN
let SpaceMap
function SpaceGame(){
const [SpaceMapItems, setSMI] =  useState(169);
 


 function SartSpaceGame (){
 let stBTNSPACe =  document.getElementById('BTN_SPACE')
 stBTNSPACe.style.display = 'none'
    SpaceMap = document.getElementById("SpaceMap")
    SpaceMap.style.display = 'grid'
      for (let i = 0; i < SpaceMapItems; i++) {
        SpaceSPAN = document.createElement("span");
        SpaceSPAN.classList.add("SpaceGameMap");
        SpaceMap.appendChild(SpaceSPAN);
      }
 }
 
    return(
        <span>
        <button id='BTN_SPACE' className='StartBTN_SPACE blobSPACE' onClick={SartSpaceGame}> <span className='StartBTN_SPACEITEM'>Start Game </span></button>
        <div className='SpaceContainer' id='SpaceMap'>
        </div>
        </span>
    )
}

export default SpaceGame


//TODO Mit JS die elemente ( MAP ) erstellen 
//TODO flugzeug stylen
//TODO schuss stylen 
//TODO LEBEN oder Herzen?
//TODO flug funktion 
//TODO schuss funktion 
//??
//TODO MateRandom schuss funktion bot
//TODO MateRandom flug funktion bot
//TODO gegner flugzeug stylen
//TODO Gegner LEBEN 
//TODO gegner schuss stylen 
//TODO BOSS
//TODO LEVEL