const tabellone = document.querySelector("main div");
const tabellina = document.getElementsByClassName("tabellaGiocatore")[0];
const tabellina2 = document.getElementsByClassName("tabellaGiocatore2")[0];
const tabellina3 = document.getElementsByClassName("tabellaGiocatore3")[0];
const mainTable = document.querySelector("nav #generateMain");

const generateCell = function () {
  for (i = 1; i < 76; i++) {
    cell = document.createElement("div");
    cell.classList.add(`${i}`);
    cell.classList.add("small");
    cell.innerText = i;
    tabellone.appendChild(cell);
  }
};
function getRandomInt(Num) {
  return Math.floor(Math.random() * 75);
}
generateCell();

const getRandomCell = function (numEvent) {
  const rNum = Math.floor(Math.random() * 75 + 1);
  const cellUscita = document.getElementsByClassName(`${rNum}`)[0];
  // const cellUscita2 = document.getElementsByClassName
  if (cellUscita === document.getElementsByClassName("uscito")[rNum]) {
    getRandomCell("");
    console.log("gia uscito");
  } else {
    cellUscita.classList.add("uscito");
    // cellUscita2.classList.add("uscito");
  }

  console.log(rNum);
  // console.log(cellUscita);
};

const newTab = function (createEvent) {
  const scheda = document.querySelectorAll(".tabellaGiocatore div");
  if (scheda.length < 24) {
    for (i = 1; i < 25; i++) {
      const arrayForNumber = [];
      cell = document.createElement("div");
      const rNum = Math.floor(Math.random() * 75 + 1);
      arrayForNumber.push(rNum);
      for (i = 0; i < 23; i++) {
        cell.classList.add(`${arrayForNumber[i]}`);
        cell.classList.add("small");
        cell.innerText = rNum;
        tabellina2.appendChild(cell);
      }
    }
  }
};
const newTab2 = function (createEvent) {
  const scheda = document.querySelectorAll(".tabellaGiocatore div");
  if (scheda.length < 24) {
    for (i = 1; i < 25; i++) {
      cell = document.createElement("div");
      const rNum = Math.floor(Math.random() * 75 + 1);
      cell.classList.add(`${rNum}`);
      cell.classList.add("small");
      cell.innerText = rNum;
      tabellina3.appendChild(cell);
    }
  }
};
const newTab3 = function (createEvent) {
  const scheda = document.querySelectorAll(".tabellaGiocatore div");
  if (scheda.length < 24) {
    for (i = 1; i < 25; i++) {
      cell = document.createElement("div");
      const rNum = Math.floor(Math.random() * 75 + 1);
      cell.classList.add(`${rNum}`);
      cell.classList.add("small");
      cell.innerText = rNum;
      tabellina.appendChild(cell);
    }
  }
};
