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
function StartHang() {
    textDiv = document.getElementById("textHang");
    let StartBtn = document.getElementById("StartBTNHang");
    let TContainer = document.getElementById("TastenContainerHang");
    TContainer.style.display = "flex";
    StartBtn.style.display = "none";
    for (let i = 0; i < Wort.length; i++) {
    letterDiv = document.createElement("h1");
    letterDiv.setAttribute('id', Wort.charAt(i) )
    letterDiv.classList.add("HangH1")
    letterDiv.textContent = Wort.charAt(i);
    textDiv.appendChild(letterDiv);
    }
}
function SubHang(){
        let HangH1 = document.querySelectorAll('#'+Buchstabe)
        console.log(HangH1)
        for (let i = 0; i < HangH1.length; i++) {
            const RichtigHang = HangH1[i];
            RichtigHang.classList.add("SolvedHang")
        }
}
return (
    <span className="HangManPage">
    <span id="textHang">
    </span>
    <button id="StartBTNHang" onClick={StartHang}>
        Start Game
    </button>
    <span className="inputContainerHang" id="TastenContainerHang">
        <h1>{Buchstabe}</h1>
        <span className="TastenContainerHang" >
        {Tastatur.map((tasten, i) => {
            return (
            <button key={i} className="TastenHang" onClick={() => {
                setBuchstabe(tasten.toUpperCase());
                }}>{tasten}</button>
            );
        })}
        </span>
        <button id="hangman" onClick={SubHang}>Submit</button>
    </span>
    </span>
);
}
//! Hangman animation
//? viel spas zukunfts dilman <3 Danke viel spaß mit der animation hahaha <3
//!  opacity animation mit classLIst ADD atadt display none 