const hourNow = document.getElementById("hour");
const dayNow = document.getElementById("title");
const img = document.getElementById("img");

const date = new Date();
let day = date.getDay();
let dateDay = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
console.log(dateDay, month, year);
switch (day) {
  case 0:
    day = "Domingo";
    break;
  case 1:
    day = "Segunda-feira";
    break;
  case 2:
    day = "Terça-feira";
    break;
  case 3:
    day = "Quarta-feira";
    break;
  case 4:
    day = "Quinta-feira";
    break;
  case 5:
    day = "Sexta-feira";
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

  if (hour > 5 && hour < 18) {
    document.body.style.backgroundColor = "#eeee80";
    hourNow.style.backgroundColor = "#eeee80";
    img.innerHTML = `<img src="../src/img/dia.jpg" alt="Imagem dia">`;
  } else {
    document.body.style.backgroundColor = "#131341";
    hourNow.style.backgroundColor = "#131341";
    img.innerHTML = `<img src="../src/img/noite.jpg" alt="Imagem noite">`;
  }
}

let timer = setInterval(clock, 1000);
