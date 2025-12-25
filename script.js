/* Lottie */
lottie.loadAnimation({
  container: document.getElementById("lottie-hero"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets5.lottiefiles.com/packages/lf20_jzv1n5.json"
});

/* GSAP */
gsap.from(".card", { y: 50, opacity: 0, duration: 1 });

/* Name from URL */
const params = new URLSearchParams(window.location.search);
document.getElementById("sender-name").textContent =
  params.get("from") || "your friend";

/* Random GIF */
const gifs = [
  `<div class="tenor-gif-embed" data-postid="5220847260438088103" data-width="100%"></div>`,
  `<div class="tenor-gif-embed" data-postid="5021225182925687911" data-width="100%"></div>`,
  `<div class="tenor-gif-embed" data-postid="24250051" data-width="100%"></div>`,
  `<div class="tenor-gif-embed" data-postid="15558344344446798318" data-width="100%"></div>`
];

const gifContainer = document.getElementById("gif-container");
gifContainer.innerHTML = gifs[Math.floor(Math.random() * gifs.length)];

if (window.Tenor) Tenor.init();

/* Share */
const BASE_URL = "https://tinyurl.com/5y4pamkh";
let shareLink = BASE_URL;

document.getElementById("generate-link").onclick = () => {
  const name = document.getElementById("sender-input").value.trim();
  if (!name) return alert("Enter your name");
  shareLink = BASE_URL + "?from=" + encodeURIComponent(name);
  alert("Your greeting is ready 🎄");
};

document.getElementById("whatsapp-btn").onclick = () => {
  const text =
`🎄✨ Merry Christmas ✨🎄

I made a special wish for you 🎁
Tap below 👇
${shareLink}`;

  window.open("https://wa.me/?text=" + encodeURIComponent(text));
};
