import { useState } from "react";
import "./HangMan.css";

export default function HangMan() {
  const [Buchstabe, setBuchstabe] = useState("");
  const [Wort, setWort] = useState("a");
  const wortGerm = [
    "Abend",
    "Affe",
    "Agil",
    "Aktiv",
    "Allee",
    "Alptraum",
    "Ananas",
    "Anfang",
    "Anker",
    "Anruf",
    "Anzug",
    "Apfel",
    "Applaus",
    "Arbeit",
    "Arzt",
    "Aspekt",
    "Atem",
    "Athlet",
    "Attraktiv",
    "Aufbau",
    "Auge",
    "Ausbildung",
    "Ausflug",
    "Ausgabe",
    "Ausgang",
    "Auswahl",
    "Auto",
    "Avocado",
    "Bach",
    "Backen",
    "Badewanne",
    "Bahn",
    "Ballett",
    "Bambus",
    "Banane",
    "Bank",
    "Bar",
    "Bart",
    "Basis",
    "Batterie",
    "Baum",
    "Baustelle",
    "Becher",
    "Becken",
    "Befehl",
    "Begleitung",
    "Behälter",
    "Behandlung",
    "Beispiel",
    "Beitrag",
    "Bekannt",
    "Bemühen",
    "Bereich",
    "Beruf",
    "Bescheid",
    "Besitz",
    "Bestand",
    "Besuch",
    "Betrieb",
    "Bewegung",
    "Bewusst",
    "Bibel",
    "Bier",
    "Bild",
    "Bildung",
    "Birne",
    "Blatt",
    "Blau",
    "Bleistift",
    "Blitz",
    "Block",
    "Blume",
    "Bluse",
    "Bohne",
    "Boot",
    "Bote",
    "Boxen",
    "Braten",
    "Brauch",
    "Braut",
    "Brief",
    "Brot",
    "Brücke",
    "Brunnen",
    "Brust",
    "Buch",
    "Bürger",
    "Burg",
    "Bus",
    "Butter",
  ];
  const wortEng = [
    "apple",
    "banana",
    "cherry",
    "dog",
    "elephant",
    "flower",
    "guitar",
    "house",
    "internet",
    "jacket",
    "kangaroo",
    "lemon",
    "mountain",
    "notebook",
    "ocean",
    "pencil",
    "queen",
    "rainbow",
    "sunflower",
    "telephone",
    "umbrella",
    "village",
    "watermelon",
    "xylophone",
    "yellow",
    "zebra",
    "airport",
    "basketball",
    "computer",
    "dolphin",
    "elephant",
    "fireworks",
    "garden",
    "hamburger",
    "insect",
    "jungle",
    "keyboard",
    "laptop",
    "moon",
    "newspaper",
    "octopus",
    "pizza",
    "quilt",
    "robot",
    "sunset",
    "tiger",
    "umbrella",
    "vacation",
    "window",
    "xylophone",
    "yacht",
    "zebra",
    "baseball",
    "camera",
    "desk",
    "elephant",
    "football",
    "golf",
    "helicopter",
    "island",
    "jacket",
    "kite",
    "lemonade",
    "motorcycle",
    "night",
    "ocean",
    "pizza",
    "quilt",
    "racecar",
    "snowman",
    "train",
    "umbrella",
    "violin",
    "waterfall",
    "xylophone",
    "yoga",
    "zebra",
    "airplane",
    "bike",
    "coffee",
    "donut",
    "elephant",
    "frog",
    "guitar",
    "hat",
    "ice cream",
    "jellyfish",
    "kangaroo",
    "lion",
    "movie",
    "notebook",
    "ocean",
    "penguin",
    "queen",
    "rocket",
    "sailing",
    "tulip",
    "umbrella",
    "volcano",
    "water",
    "xylophone",
    "yawn",
    "zebra",
  ];
  const [Tastatur, setTastatur] = useState([
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
    "Ä",
    "Ö",
    "Ü",
  ]);
  let WortGerman = wortGerm;
  let WortEnglisch = wortEng;
  let textDiv;
  let letterDiv;
  const [WrongCounter , setCount] = useState(1)
  const refreshPage = () => {
    window.location.reload();
  };
  function StartHang() {
    let HangContainerAnimation = document.getElementById(
      "HangAnimationContainer"
    );
    HangContainerAnimation.style.display = "block";
    textDiv = document.getElementById("textHang");
    let StartBtn = document.getElementById("StartBTNHang");
    let GermBtn = document.getElementById("Germ");
    let EngBtn = document.getElementById("Eng");
    let TContainer = document.getElementById("TastenContainerHang");
    TContainer.style.display = "flex";
    StartBtn.style.display = "none";
    GermBtn.style.display = "none";
    EngBtn.style.display = "none";
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
      document.getElementById("TastenContainerHang").style.display = "none";
      let Reloader = document.getElementById("Reloader");
      Reloader.style.display = "flex";
    }
  }

  function SubHang() {
    let HangH1 = document.querySelectorAll("#" + Buchstabe);
console.log(WrongCounter)
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
    console.log("WrongCount wird ausgefürt")
   setCount(WrongCounter+ 1)
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
        let HangH1 = document.querySelectorAll(".HangH1");
        for (let i = 0; i < HangH1.length; i++) {
          const RichtigHang = HangH1[i];
          RichtigHang.classList.add("FailHang");
        }
        let Reloader = document.getElementById("Reloader");
        Reloader.style.display = "flex";
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
      <button type="reloade" id="Reloader" className="LanguageBTN" onClick={refreshPage}>
      TRY AGAIN
      </button>
      <button
        id="Germ"
        className="LanguageBTN"
        onClick={() => {
          const randomIndex = Math.floor(Math.random() * WortGerman.length);
          setWort(WortGerman[randomIndex].toUpperCase());
          let StartBtn = document.getElementById("StartBTNHang");
          StartBtn.style.display = "Flex";
          let GermBtn = document.getElementById("Germ");
          let EngBtn = document.getElementById("Eng");
          GermBtn.style.display = "none";
          EngBtn.style.display = "none";
        }}>
        German
      </button>
      <button
        id="Eng"
        className="LanguageBTN"
        onClick={() => {
          const randomIndex = Math.floor(Math.random() * WortEnglisch.length);
          setWort(WortEnglisch[randomIndex].toUpperCase());
          setTastatur(Tastatur.slice(0, 26));
          let StartBtn = document.getElementById("StartBTNHang");
          StartBtn.style.display = "Flex";
          let GermBtn = document.getElementById("Germ");
          let EngBtn = document.getElementById("Eng");
          GermBtn.style.display = "none";
          EngBtn.style.display = "none";
        }}>
        English
      </button>
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
// !   visibility: hidden;  visibility: visible;
//TODO WrongCount FIX 