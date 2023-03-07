import { useState } from "react";
import "./HangMan.css";

export default function HangMan() {
  const [Buchstabe, setBuchstabe] = useState("");
  let wort = "BBBBBBA";
  const Tastatur = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let Wort = wort.toUpperCase();
  let textDiv;
  let letterDiv;
  let WrongCounter = 0;
  function StartHang() {
    let HangContainerAnimation = document.getElementById(
      "HangAnimationContainer"
    );
    HangContainerAnimation.style.display = "block";
    textDiv = document.getElementById("textHang");
    let StartBtn = document.getElementById("StartBTNHang");
    let TContainer = document.getElementById("TastenContainerHang");
    TContainer.style.display = "flex";
    StartBtn.style.display = "none";
    for (let i = 0; i < Wort.length; i++) {
      letterDiv = document.createElement("h1");
      letterDiv.setAttribute("id", Wort.charAt(i));
      letterDiv.classList.add("HangH1");
      letterDiv.textContent = Wort.charAt(i);
      textDiv.appendChild(letterDiv);
    }
  }
  function HangSolved() {
    let HangH1Solved = document.querySelectorAll(".SolvedHang");
    if (Wort.length === HangH1Solved.length) {
      let HangAnimationContainer = document.getElementById(
        "HangAnimationContainer"
      );
      HangAnimationContainer.style.display = "none";
      for (let i = 0; i < HangH1Solved.length; i++) {
        const SolvedHang = HangH1Solved[i];
        SolvedHang.classList.add("WonHang");
      }
    }
  }

  function SubHang() {
    let HangH1 = document.querySelectorAll("#" + Buchstabe);

    console.log(HangH1);
    if (HangH1.length === 0) {
      WrongCount();
    } else {
      for (let i = 0; i < HangH1.length; i++) {
        const RichtigHang = HangH1[i];
        RichtigHang.classList.add("SolvedHang");
      }
      HangSolved();
    }
  }
  function WrongCount() {
    WrongCounter++;
    let HangAnimation1 = document.getElementById("HangAnimation1");
    let HangAnimation2 = document.getElementById("HangAnimation2");
    let HangAnimation3 = document.getElementById("HangAnimation3");
    let HangAnimation4 = document.getElementById("HangAnimation4");
    let HangAnimation4_1 = document.getElementById("HangAnimation4_1");
    let HangAnimation5 = document.getElementById("HangAnimation5");
    let HangAnimation6 = document.getElementById("HangAnimation6");
    let HangAnimation6_1 = document.getElementById("HangAnimation6_1");
    let HangAnimation6_2 = document.getElementById("HangAnimation6_2");
    let HangAnimation6_3 = document.getElementById("HangAnimation6_3");

    switch (WrongCounter) {
      case 1:
        HangAnimation1.style.backgroundColor = "blue";
        HangAnimation1.style.display = "block";
        break;
      case 2:
        HangAnimation2.style.backgroundColor = "blue";
        HangAnimation2.style.display = "block";
        break;
      case 3:
        HangAnimation3.style.backgroundColor = "blue";
        HangAnimation3.style.display = "block";
        break;
      case 4:
        HangAnimation4.style.backgroundColor = "blue";
        HangAnimation4.style.display = "block";
        HangAnimation4_1.style.backgroundColor = "blue";
        HangAnimation4_1.style.display = "block";
        break;
      case 5:
        HangAnimation5.style.backgroundColor = "blue";
        HangAnimation5.style.display = "block";
        break;
      case 6:
        HangAnimation6.style.display = "block";
        break;
      case 7:
        HangAnimation6_1.style.display = "block";

        break;
      case 8:
        HangAnimation6_2.style.display = "block";

        break;
      case 9:
        HangAnimation6_3.style.display = "block";
        document.getElementById("TastenContainerHang").style.display = "none";
        let HangH1 = document.querySelectorAll("#" + Buchstabe);
        for (let i = 0; i < HangH1.length; i++) {
          const RichtigHang = HangH1[i];
          RichtigHang.classList.add("SolvedHang");
        }
        break;
      default:
        break;
    }
  }
  return (
    <span className="HangManPage">
      <span id="HangAnimationContainer">
        <div id="HangAnimation1"></div>
        <div id="HangAnimation2"></div>
        <div id="HangAnimation3"></div>
        <div id="HangAnimation4"></div>
        <div id="HangAnimation4_1"></div>
        <div id="HangAnimation5"></div>
        <div id="HangAnimation6"></div>
        <div id="HangAnimation6_1"></div>
        <div id="HangAnimation6_2"></div>
        <div id="HangAnimation6_3"></div>
      </span>
      <span id="textHang"></span>
      <button id="StartBTNHang" onClick={StartHang}>
        Start Game
      </button>
      <span className="inputContainerHang" id="TastenContainerHang">
        <h1 className="BuchstabeHang">{Buchstabe}</h1>
        <span className="TastenContainerHang">
          {Tastatur.map((tasten, i) => {
            return (
              <button
                key={i}
                className="TastenHang"
                onClick={() => {
                  setBuchstabe(tasten.toUpperCase());
                }}>
                {tasten}
              </button>
            );
          })}
        </span>
        <button id="hangman" onClick={SubHang}>
          Submit
        </button>
      </span>
    </span>
  );
}
//! Hangman animation
//? viel spaß zukunfts dilman <3 Danke viel spaß mit der animation <3 joonge die animaton </3
//TODO animation mit classLIst ADD stadt display none für den startBTN und so1
// !   visibility: hidden;  visibility: visible;
// switch case im else ++i oder so ez
