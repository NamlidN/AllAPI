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
let Botinterval
let Botinterval_Tracer;
let Time = 1;
let Time_Tracer = 1;
let BTime = 1;
let BTime_Tracer = 1;

function SpaceGame() {
  const [keyCode, setKeyCode] = useState(null);
  console.log(keyCode);
  const [PlayerLeft, setPL] = useState(974);
  const [PlayerRight, setPR] = useState(976);
  const [Playerbarrel, setPBarrel] = useState(PlayerLeft - 49);
  const [PlayerBullet, setPBullet] = useState(null);
  const [BotBullet, setBBullet] = useState(null);
  const [BotLeft, setBL] = useState(4);
  const [BotRight, setBR] = useState(6);
  const [Botbarrel, setBBarrel] = useState(BotLeft + 51);

  console.log(PlayerBullet + setBL + setBR +setBBarrel);
  function BotSpawn(){
    for (let i = BotLeft; i <= BotRight; i++) {
      let Player = document.getElementById(i);
      Player.classList.add("BotSpace");
      Player.classList.remove("SpaceGameMap");
      PlayerShoot = document.getElementById(Botbarrel);
      PlayerShoot.classList.add("BotSpaceShoot");
      PlayerShoot.classList.remove("SpaceGameMap");
    }
BotShootRandom()
  }
  function BotShootRandom(){


let CalBotinterval = setInterval(() => {

  let BotCal = Math.floor(Math.random() * 10) + 1
  console.log(BotCal+ "  BotCal")
  if ( BotCal >= 4){
    if(!BotBullet){
      BotShooterEvent_Remove()
      BotShooterEvent()
    }else if(BotCal === 932342){

clearInterval(CalBotinterval)
    }else{
      setTimeout(() => {}, 100)
    }
  }

}
, 1000)
  };
 
  function BotShooterEvent() {
    let BNew_Time = BTime;
    setBBullet(Botbarrel + 50);
    console.log(BNew_Time);
    Botinterval = setInterval(() => {
      if (BNew_Time >= 19) {
        clearInterval(Botinterval);
        return;
      } else {
        Player_Shoot_Bullet = document.getElementById(
          Botbarrel + (BNew_Time * 100) / 2
        );
        Player_Shoot_Bullet.classList.remove("SpaceGameMap");
        Player_Shoot_Bullet.classList.add("PlayerBullet");
        BNew_Time++;
      }
    }, 50);
    BTime = 1;
  }


  function BotShooterEvent_Remove() {
    setTimeout(() => {
      let BNew_Time_Tracer = BTime_Tracer;
      console.log(BNew_Time_Tracer);
      Botinterval_Tracer = setInterval(() => {
        if (BNew_Time_Tracer === 19) {
          clearInterval(Botinterval_Tracer);
          setBBullet(null);
        } else  {
          Player_Shoot_Bullet_Tracer = document.getElementById(
            Botbarrel + (BNew_Time_Tracer * 100) / 2
          );
          Player_Shoot_Bullet_Tracer.classList.remove("PlayerBullet");
          Player_Shoot_Bullet_Tracer.classList.add("SpaceGameMap");
          BNew_Time_Tracer++;
        }
      }, 50);
    }, 50);
    BTime_Tracer = 1;
  }
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
    BotSpawn()
  }
  function BullteShooterEvent() {
    let New_Time = Time;
    setPBullet(Playerbarrel - 50);
    console.log(New_Time);
    intervalId = setInterval(() => {
      if (New_Time >= 19) {
        clearInterval(intervalId);
        return;
      } else {
        Player_Shoot_Bullet = document.getElementById(
          Playerbarrel - (New_Time * 100) / 2
        );
        Player_Shoot_Bullet.classList.remove("SpaceGameMap");
        Player_Shoot_Bullet.classList.add("PlayerBullet");
        New_Time++;
      }
    }, 50);
    Time = 1;
  }

  function BullteShooterEvent_Remove() {
    setTimeout(() => {
      let New_Time_Tracer = Time_Tracer;
      console.log(New_Time_Tracer);
      intervalId_Tracer = setInterval(() => {
        if (New_Time_Tracer >= 19) {
          clearInterval(intervalId_Tracer);
          setPBullet(null);
        } else  {
          Player_Shoot_Bullet_Tracer = document.getElementById(
            Playerbarrel - (New_Time_Tracer * 100) / 2
          );
          Player_Shoot_Bullet_Tracer.classList.remove("PlayerBullet");
          Player_Shoot_Bullet_Tracer.classList.add("SpaceGameMap");
          New_Time_Tracer++;
        }
      }, 50);
    }, 50);
    Time_Tracer = 1;
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
        if (!PlayerBullet) {
          // check if there's already a bullet on the screen
         
          BullteShooterEvent();
          BullteShooterEvent_Remove();
        }
        //Space
        break;
        case 80:
          if (!PlayerBullet) {
            // check if there's already a bullet on the screen
           
            BullteShooterEvent();
            BullteShooterEvent_Remove();
          }
          //p
          break;
      default:
        break;
    }
  }
  return (
    <span id="WorldSPace" tabIndex="-1" onKeyUp={handleKeyDown}>
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
// schuss stylen  //?Fertig //!FEtten schuss
//TODO LEBEN oder Herzen?
//flug funktion  //!FERTIG
//schuss funktion  //!FERTIG
//??
//TODO MateRandom schuss funktion bot
//TODO MateRandom flug funktion bot
//TODO gegner flugzeug stylen
//TODO Gegner LEBEN SCHILD??
//TODO gegner schuss stylen
//TODO BOSS
//TODO HighScore
