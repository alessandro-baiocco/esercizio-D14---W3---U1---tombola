const tabellone = document.querySelector("main div");
const tabellina = document.getElementsByClassName("tabellaGiocatore")[0];
const tabellina2 = document.getElementsByClassName("tabellaGiocatore2")[0];
const tabellina3 = document.getElementsByClassName("tabellaGiocatore3")[0];
const mainTable = document.querySelector("nav #generateMain");
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
  const aNumGen = Math.floor(Math.random() * 75 + 1);
  const aNumGen2 = parseInt(aNumGen);
  if (!genArray.includes(aNumGen2)) {
    console.log(genArray);
    genArray.push(aNumGen2);
    console.log(aNumGen2);
    const cellUscita = document.getElementsByClassName(`${aNumGen2}`)[0];
    const cellUscita2 = document.getElementsByClassName(`${aNumGen2}`)[1];
    const cellUscita3 = document.getElementsByClassName(`${aNumGen2}`)[2];
    const cellUscita4 = document.getElementsByClassName(`${aNumGen2}`)[3];
    cellUscita.classList.add("uscito");
    cellUscita2.classList.add("uscito");
    cellUscita3.classList.add("uscito");
    cellUscita4.classList.add("uscito");
  } else {
    console.log("duplicato");
    generateInt(1);
  }
};

const newTab = function (createEvent) {
  const generateInt2 = function () {
    const aNumGen = parseInt(Math.floor(Math.random() * 75 + 1));
    if (!scheda1.includes(aNumGen)) {
      scheda1.push(aNumGen);
      console.log(aNumGen);
      cell.classList.add(`${aNumGen}`);
      cell.classList.add("small");
      cell.innerText = aNumGen;
      tabellina.appendChild(cell);
    } else {
      console.log("duplicato");
      generateInt2();
    }
  };

  for (i = 1; i < 25; i++) {
    cell = document.createElement("div");
    generateInt2();
  }
};
const newTab2 = function (createEvent) {
  const generateInt2 = function () {
    const aNumGen = parseInt(Math.floor(Math.random() * 75 + 1));
    if (!scheda2.includes(aNumGen)) {
      scheda2.push(aNumGen);
      console.log(aNumGen);
      cell.classList.add(`${aNumGen}`);
      cell.classList.add("small");
      cell.innerText = aNumGen;
      tabellina2.appendChild(cell);
    } else {
      console.log("duplicato");
      generateInt2();
    }
  };
  for (i = 1; i < 25; i++) {
    cell = document.createElement("div");
    generateInt2();
  }
};
const newTab3 = function (createEvent) {
  const generateInt2 = function () {
    const aNumGen = parseInt(Math.floor(Math.random() * 75 + 1));
    if (!scheda3.includes(aNumGen)) {
      scheda3.push(aNumGen);
      console.log(aNumGen);
      cell.classList.add(`${aNumGen}`);
      cell.classList.add("small");
      cell.innerText = aNumGen;
      tabellina3.appendChild(cell);
    } else {
      console.log("duplicato");
      generateInt2();
    }
  };
  for (i = 1; i < 25; i++) {
    cell = document.createElement("div");
    generateInt2();
  }
};
