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
function HangSolved(){
    let HangH1Solved = document.querySelectorAll('.SolvedHang')
    console.log(HangH1Solved)
    if( Wort.length === HangH1Solved.length ){
        console.log("Hallo")
        for (let i = 0; i < HangH1Solved.length; i++) {
            const SolvedHang = HangH1Solved[i];
            SolvedHang.classList.add("WonHang")
        }
    }
}
function SubHang(){
    let HangH1 = document.querySelectorAll('#'+Buchstabe)
    console.log(HangH1)
    for (let i = 0; i < HangH1.length; i++) {
        const RichtigHang = HangH1[i];
        RichtigHang.classList.add("SolvedHang")
    }
    HangSolved()
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
//? viel spaß zukunfts dilman <3 Danke viel spaß mit der animation <3
//TODO animation mit classLIst ADD stadt display none für den startBTN und so
// !   visibility: hidden;  visibility: visible;