const tabellone = document.querySelector("main div");
const mainTable = document.querySelector("nav #generateMain");
const numberOut = document.getElementsByClassName("numberOut")[0];
const btnNumb = document.getElementsByClassName("newTab")[0];
const divFooter = document.querySelector("footer div");

const genArray = [];
const scheda1 = [];
const scheda2 = [];
const scheda3 = [];

const generateCell = function () {
  for (i = 1; i < 76; i++) {
    cell = document.createElement("div");
    cell.classList.add(`${i}`);
    cell.classList.add("small");
    cell.innerText = i;
    tabellone.appendChild(cell);
  }
};
generateCell();
const generateInt = function (num) {
  const aNumGen = parseInt(Math.floor(Math.random() * 75 + 1));
  numberOut.innerText = `${aNumGen}`;
  if (!genArray.includes(aNumGen)) {
    console.log(genArray);
    genArray.push(aNumGen);
    console.log(aNumGen);
    const cellUscita = document.getElementsByClassName(`${aNumGen}`);
    for (let i = 0; i < cellUscita.length; i++) {
      cellUscita[i].classList.add("uscito");
    }
    const numeroFooter = document.createElement("div");
    numeroFooter.innerText = `${aNumGen}`;
    numeroFooter.classList.add("small");
    divFooter.appendChild(numeroFooter);
  } else {
    console.log("duplicato");
    generateInt(1);
  }
};
let tabI = 0;
let tabellina = document.getElementsByClassName("tabellaGiocatore");

const newTab = function (createEvent) {
  const generateInt2 = function () {
    const aNumGen = parseInt(Math.floor(Math.random() * 75 + 1));
    if (!scheda1.includes(aNumGen)) {
      scheda1.push(aNumGen);
      cell.classList.add(`${aNumGen}`);
      cell.classList.add("small");
      cell.innerText = aNumGen;
      tabellina[tabI].appendChild(cell);
    } else {
      generateInt2();
    }
  };

  for (i = 1; i < 25; i++) {
    cell = document.createElement("div");
    generateInt2();
  }

  tabI += 1;
  console.log(tabI);
  if (tabI === 3) {
    btnNumb.remove();
  }
};
