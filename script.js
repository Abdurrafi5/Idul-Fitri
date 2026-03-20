const typing = document.getElementById("typing");
const buttons = document.getElementById("buttons");

const mau = document.getElementById("mau");
const gamau = document.getElementById("gamau");

const popup = document.getElementById("popup");
const jumpscare = document.getElementById("jumpscare");
const sound = document.getElementById("sound");
const music = document.getElementById("music");
const startBtn = document.getElementById("startBtn");
const card = document.getElementById("card");

const text = `Minal 'Aidin wal-Faizin 🤍
Mohon maaf lahir batin yaa

Allo sahabatku yang aku sayamgi, semoga di hari yang fitri ini kamu mendapatkan banyak keberkahan dan kebahagiaan.
Semoga segala dosa kita diampuni dan kita bisa memulai lembaran baru dengan hati yang bersih.

Aku juga mau ngucapin terima kasih banyak karena udah jadi bagian dari hidupku,
udah nemenin aku di saat susah dan senang, 
dan selalu ada buat aku. Aku bersyukur banget punya sahabat sepertimu.

Keliatan banget AInya AJR WKWKWK :v yaa selamat hari raya idul fitri ya, salam abdurrafi :P

Karena aku udah ngucapin, Mau yaa kasih aku thr 😊😊😊😊🙏🙏🙏`;

let i = 0;
let kaburCount = 0;
let popupCount = 0;
let aktifKabur = true;

const popupTexts = [
  "Yakin gak mau? :((",
  "Plisss mauu dongg",
  "Mau Mau Mau Mau Mauu yaa",
  "Mauu yaa pliss 🥺🥺",
  "Yauda kalo gamau, coba aja klik lagi kalau berani 😒😒"
];

document.body.addEventListener("click", () => {
  music.play();
}, { once: true });

function ketik() {
  if (i < text.length) {
    typing.innerHTML += text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
    i++;
    setTimeout(ketik, 35);
  } else {
    buttons.classList.remove("hidden");
  }
}

startBtn.onclick = () => {
  startBtn.style.display = "none";

  card.classList.remove("hidden");
  card.classList.add("fadeIn");

  typing.style.display = "block";
  ketik();
};

mau.onclick = () => {
  const nomor = "6281267152015";
  const pesan = "Nih THRnya 100 JUTA, Sama Sama 😎😎";
  window.open(`https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`);
};

function showPopup() {
  const randomText = popupTexts[Math.floor(Math.random() * popupTexts.length)];

  popup.innerText = randomText;
  popup.style.transform = "translate(-50%, -50%) scale(1)";

  setTimeout(() => {
    popup.style.transform = "translate(-50%, -50%) scale(0)";
  }, 1200);

  popupCount++;

  if (popupCount === 3) {
    setTimeout(() => {
      jumpscare.style.display = "block";
      sound.play();
      gamau.style.display = "none";

      setTimeout(() => {
        jumpscare.style.display = "none";
        sound.pause();
      }, 3000);
    }, 500);
  }
}

gamau.onclick = () => {
  showPopup();
};

gamau.onmouseover = () => {
  if (aktifKabur) {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    gamau.style.transform = `translate(${x}px, ${y}px)`;

    kaburCount++;

    if (kaburCount % 3 === 0) {
      showPopup();
    }
  }
};