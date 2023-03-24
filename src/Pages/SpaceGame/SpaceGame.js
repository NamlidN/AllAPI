import { useState } from "react";
import "./SpaceGame.css";

let SpaceSPAN;
let SpaceMap;
let MAP_ITEM_ELEMENTS = 1000;
let PlayerShoot;
let Player_Shoot_Bullet;
let PressAnyKeySpace;
let Player_Shoot_Bullet_Tracer;
let intervalId;
let intervalId_Tracer;
let Time 
let Time_Tracer 
//!!!!!!!!!!!!!!!!!!!!!!!
// let PlayerGun
// const [PlayerOrMap, setPlayerOrMap] = useState();
// PlayerGun = document.createElement("span");
// PlayerGun.classList.add("PlayerGun");
// PlayerGun.setAttribute("id", "Playerbarrel");
// PlayerShoot.appendChild(PlayerGun);
//!!!!!!!!!!!!!!!!!!!!!!!
function SpaceGame() {
  const [keyCode, setKeyCode] = useState(null);
  console.log(keyCode);
  const [PlayerLeft, setPL] = useState(974);
  const [PlayerRight, setPR] = useState(976);
  const [Playerbarrel, setPBarrel] = useState(PlayerLeft - 49);
  const [PlayerBullet, setPBullet] = useState(Playerbarrel - 50);
  console.log(PlayerBullet);
  function StartSpaceGame() {
    let FocusElement = document.getElementById("WorldSPace");
    PressAnyKeySpace = document.getElementById("AnyKeySpace");
    PressAnyKeySpace.classList.add("AnyKeySpace");
    PressAnyKeySpace.style.display = "flex";
    if (FocusElement.onfocus === true) {
    }
    let stBTNSPACe = document.getElementById("BTN_SPACE");
    stBTNSPACe.style.display = "none";
    SpaceMap = document.getElementById("SpaceMap");
    SpaceMap.style.display = "grid";
    for (let i = 1; i <= MAP_ITEM_ELEMENTS; i++) {
      SpaceSPAN = document.createElement("span");
      SpaceSPAN.classList.add("SpaceGameMap");
      SpaceSPAN.setAttribute("id", i);
      SpaceSPAN.textContent = i;
      SpaceMap.appendChild(SpaceSPAN);
    }
    for (let i = PlayerLeft; i <= PlayerRight; i++) {
      let Player = document.getElementById(i);
      Player.classList.add("PlayerSpace");
      Player.classList.remove("SpaceGameMap");
      PlayerShoot = document.getElementById(Playerbarrel);
      PlayerShoot.classList.add("PlayerSpaceShoot");
      PlayerShoot.classList.remove("SpaceGameMap");
    }
  }
  function FocusEvent() {
    PressAnyKeySpace.style.display = "none";
  }
  function BullteShooterEvent() {
    intervalId = setInterval(() => {
      console.log(Time)
      if (Time === 19) {
        clearInterval(intervalId);
        return
      } else{
      Player_Shoot_Bullet = document.getElementById(Playerbarrel - (Time * 100) / 2);
      Player_Shoot_Bullet.classList.remove("SpaceGameMap");
      Player_Shoot_Bullet.classList.add("PlayerBullet");
      Time++;
      }
    }, 500);
  }
  function BullteShooterEvent_Remove() {
    setTimeout(() => {
      intervalId_Tracer = setInterval(() => {
      console.log(Time_Tracer)
      if (Time_Tracer  === 19 ) {
        clearInterval(intervalId_Tracer);
        return
      } else{
        Player_Shoot_Bullet_Tracer = document.getElementById(Playerbarrel - (Time_Tracer * 100) / 2);
        Player_Shoot_Bullet_Tracer.classList.remove("PlayerBullet");
        Player_Shoot_Bullet_Tracer.classList.add("SpaceGameMap");
        Time_Tracer++;
      }
      }, 500);
    }, 500);
  }
  function stopInterval() {
    if (Time === 18 && Time_Tracer  === 18  ) {
      clearInterval(intervalId);
      clearInterval(intervalId_Tracer);
    } 
    // if ( Time_Tracer  === 19  ) {
    //   clearInterval(intervalId_Tracer);
    // } 
  }
  function handleKeyDown(e) {
    setKeyCode(e.keyCode);
    switch (e.keyCode) {
      case 37:
        if (PlayerLeft > 951) {
          for (let i = PlayerLeft; i <= PlayerRight; i++) {
            let Player = document.getElementById(i);
            PlayerShoot = document.getElementById(Playerbarrel);
            PlayerShoot.classList.remove("PlayerSpaceShoot");
            PlayerShoot.classList.add("SpaceGameMap");
            Player.classList.remove("PlayerSpace");
            Player.classList.add("SpaceGameMap");
          }
          setPL((prev) => prev - 1);
          setPR((prev) => prev - 1);
          setPBarrel((prev) => prev - 1);
          for (let i = PlayerLeft - 1; i <= PlayerRight - 1; i++) {
            PlayerShoot = document.getElementById(Playerbarrel - 1);
            PlayerShoot.classList.add("PlayerSpaceShoot");
            PlayerShoot.classList.remove("SpaceGameMap");
            let Player = document.getElementById(i);
            Player.classList.remove("SpaceGameMap");
            Player.classList.add("PlayerSpace");
          }
        }
        // Links
        break;
      case 39:
        if (PlayerRight < 1000) {
          for (let i = PlayerLeft; i <= PlayerRight; i++) {
            let Player = document.getElementById(i);
            PlayerShoot = document.getElementById(Playerbarrel);
            PlayerShoot.classList.remove("PlayerSpaceShoot");
            PlayerShoot.classList.add("SpaceGameMap");
            Player.classList.remove("PlayerSpace");
            Player.classList.add("SpaceGameMap");
          }
          setPL((prev) => prev + 1);
          setPR((prev) => prev + 1);
          setPBarrel((prev) => prev + 1);
          for (let i = PlayerLeft + 1; i <= PlayerRight + 1; i++) {
            PlayerShoot = document.getElementById(Playerbarrel + 1);
            PlayerShoot.classList.add("PlayerSpaceShoot");
            PlayerShoot.classList.remove("SpaceGameMap");
            let Player = document.getElementById(i);
            Player.classList.remove("SpaceGameMap");
            Player.classList.add("PlayerSpace");
          }
        }
        // rechts
        break;
      case 32:
         Time = 1
         Time_Tracer = 1

        setPBullet(Playerbarrel - 50);
        BullteShooterEvent();
        BullteShooterEvent_Remove();
        stopInterval();
        //Space
        break;
      default:
        break;
    }
  }
  return (
    <span id="WorldSPace" tabIndex="0" onKeyDown={handleKeyDown}>
      <h1 className="AnyKeySpace" id="AnyKeySpace">
        Click to start the Game
      </h1>
      <button
        id="BTN_SPACE"
        className="StartBTN_SPACE blobSPACE"
        onClick={StartSpaceGame}>
        <span className="StartBTN_SPACEITEM">Start Game </span>
      </button>
      <div className="SpaceContainer" id="SpaceMap" onClick={FocusEvent}>
        <h1 className="AnyKeySpace" id="AnyKeySpace">
          Click to start the Game
        </h1>
      </div>
    </span>
  );
}

export default SpaceGame;

// Mit JS die elemente ( MAP ) erstellen //!FERTIG
// flugzeug stylen  //?  HALB FERTIG
//TODO schuss stylen
//TODO LEBEN oder Herzen?
//TODO flug funktion
//TODO schuss funktion
//??
//TODO MateRandom schuss funktion bot
//TODO MateRandom flug funktion bot
//TODO gegner flugzeug stylen
//TODO Gegner LEBEN SCHILD??
//TODO gegner schuss stylen
//TODO BOSS
//TODO HighScore
