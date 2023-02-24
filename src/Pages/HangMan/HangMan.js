import { useState } from "react";
import "./HangMan.css";

export default function HangMan() {
  const [Buchstabe, setBuchstabe] = useState("");
  let wort = "Beispieltext";
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
function Start() {
    textDiv = document.getElementById("textHang");
    let StartBtn = document.getElementById("StartBTNHang");
    let TContainer = document.getElementById("TastenContainerHang");
    TContainer.style.display = "flex";
    StartBtn.style.display = "none";
    for (let i = 0; i < Wort.length; i++) {
    letterDiv = document.createElement("h1");
    letterDiv.textContent = Wort.charAt(i);
    textDiv.appendChild(letterDiv);
    }
}
return (
    <span className="HangManPage">
    <span id="textHang"></span>
    <button id="StartBTNHang" onClick={Start}>
        Start Game
    </button>
    <span className="inputContainerHang" id="TastenContainerHang">
        <h1>{Buchstabe}</h1>
        <span className="TastenContainerHang" >
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
        <button id="hangman">Submit</button>
    </span>
    </span>
);
}
//TODO Funktion die den buchstaben mit denm wort überprüft und den jeweiligen buschstaben aufedckt 

//! Hangman animation

//? viel spas zukunfts dilman <3


//!  opacity animation mit classLIst ADD atadt display none 