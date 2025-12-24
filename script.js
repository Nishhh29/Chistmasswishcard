/* ===== LOTTIE HERO ===== */
lottie.loadAnimation({
  container: document.getElementById("lottie-hero"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets5.lottiefiles.com/packages/lf20_jzv1n5.json"
});

/* ===== GSAP ENTRANCE ===== */
gsap.from(".card", {
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

/* ===== NAME FROM URL ===== */
const params = new URLSearchParams(window.location.search);
const sender = params.get("from") || "your friend";
document.getElementById("sender-name").textContent = sender;

/* ===== RANDOM GIF ===== */
const gifEmbeds = [
  `<div class="tenor-gif-embed" data-postid="5220847260438088103" data-share-method="host" data-width="100%"></div>`,
  `<div class="tenor-gif-embed" data-postid="5021225182925687911" data-share-method="host" data-width="100%"></div>`,
  `<div class="tenor-gif-embed" data-postid="24250051" data-share-method="host" data-width="100%"></div>`,
  `<div class="tenor-gif-embed" data-postid="15558344344446798318" data-share-method="host" data-width="100%"></div>`
];

document.getElementById("gif-container").innerHTML =
  gifEmbeds[Math.floor(Math.random() * gifEmbeds.length)];

/* ===== SHARE LOGIC ===== */
const BASE_URL = "https://tinyurl.com/5y4pamkh";
let shareLink = BASE_URL;

document.getElementById("generate-link").addEventListener("click", () => {
  const name = document.getElementById("sender-input").value.trim();
  if (!name) {
    alert("Please enter your name");
    return;
  }
  shareLink = BASE_URL + "?from=" + encodeURIComponent(name);
  alert("Your greeting is ready! 🎄");
});

document.getElementById("whatsapp-btn").addEventListener("click", () => {
  const text =
`🎄✨ Merry Christmas ✨🎄

I made a special Christmas wish just for you 🎁
It made me smile, hope it makes you smile too 😊

👇 Tap below to see it 👇
${shareLink}`;

  window.open(
    "https://wa.me/?text=" + encodeURIComponent(text),
    "_blank"
  );
});
