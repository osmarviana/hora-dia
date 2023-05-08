const hourNow = document.getElementById("hour");
const dayNow = document.getElementById("date");
const imgContainer = document.querySelector("#img-illustration");
const container = document.querySelector(".container");

const date = new Date();
let day = date.getDay();
let dateDay = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

switch (day) {
  case 0:
    day = "Domingo";
    break;
  case 1:
    day = "Segunda";
    break;
  case 2:
    day = "Terça";
    break;
  case 3:
    day = "Quarta";
    break;
  case 4:
    day = "Quinta";
    break;
  case 5:
    day = "Sexta";
    break;
  case 6:
    day = "Sábado";
    break;
  default:
    alert("[ERRROR] Dia inválido.");
    break;
}
switch (month) {
  case 0:
    month = "Janeiro";
    break;
  case 1:
    month = "Fevereiro";
    break;
  case 2:
    month = "Março";
    break;
  case 3:
    month = "Abril";
    break;
  case 4:
    month = "Maio";
    break;
  case 5:
    month = "Junho";
    break;
  case 6:
    month = "Julho";
    break;
  case 7:
    month = "Agosto";
    break;
  case 8:
    month = "Setembro";
    break;
  case 9:
    month = "Outubro";
    break;
  case 10:
    month = "Novembro";
    break;
  case 11:
    month = "Dezembro";
    break;
  default:
    alert("[ERRROR] Mês inválido.");
    break;
}
dayNow.innerHTML = `${day}, ${dateDay} de ${month} de ${year}`;

function clock() {
  const now = new Date();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  let timeNow = `${hour}:${min}:${sec}`;

  hourNow.innerText = timeNow;

  if (hour >= 5 && hour < 12) {
    document.body.style.backgroundImage =
      "linear-gradient(rgba(186, 230, 231, 1), rgba(61, 106, 116, 0.2))";
    container.style.backgroundColor = "rgb(0, 89, 255)";
    imgContainer.innerHTML = `
    <img src="https://cdn-icons-png.flaticon.com/512/3892/3892928.png" alt"Imagem dia">
    <h1 class="dia">Bom dia!</h1>
    `;
  } else if (hour >= 12 && hour < 18) {
    document.body.style.backgroundImage =
      "linear-gradient(rgb(186, 200, 231), rgba(61, 76, 116, 0.2))";
    container.style.backgroundColor = "rgb(55, 0, 255)";
    imgContainer.innerHTML = `
    <img src="https://cdn-icons-png.flaticon.com/512/3892/3892928.png" alt"Imagem dia">
    <h1 class="tarde">Boa tarde!</h1>
    `;
  } else {
    document.body.style.backgroundImage =
      "linear-gradient(rgba(44, 21, 59, 1), rgba(15, 3, 36, 0.8)";
    container.style.backgroundColor = "rgb(17, 6, 43)";
    imgContainer.innerHTML = `
    <img src="https://cdn-icons-png.flaticon.com/512/1809/1809597.png" alt"Imagem noite">
    <h1 class="noite">Boa noite!</h1>
    `;
  }
}

let timer = setInterval(clock, 1000);
