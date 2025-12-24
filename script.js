/* ===== URL PERSONALIZATION ===== */
const params = new URLSearchParams(window.location.search);
const sender = params.get("from") || "your friend";
document.getElementById("sender-name").textContent = sender;

/* ===== RANDOM TENOR GIF ===== */
const gifEmbeds = [
  `<div class="tenor-gif-embed" data-postid="5220847260438088103" data-share-method="host" data-aspect-ratio="1.77857" data-width="100%"></div>`,
  `<div class="tenor-gif-embed" data-postid="5021225182925687911" data-share-method="host" data-aspect-ratio="0.656627" data-width="100%"></div>`,
  `<div class="tenor-gif-embed" data-postid="24250051" data-share-method="host" data-aspect-ratio="1" data-width="100%"></div>`,
  `<div class="tenor-gif-embed" data-postid="15558344344446798318" data-share-method="host" data-aspect-ratio="0.80292" data-width="100%"></div>`
];

const gifContainer = document.getElementById("gif-container");
const randomGif = gifEmbeds[Math.floor(Math.random() * gifEmbeds.length)];
gifContainer.innerHTML = randomGif;

/* ===== SHARE LOGIC ===== */
const input = document.getElementById("sender-input");
const generateBtn = document.getElementById("generate-link");
const whatsappBtn = document.getElementById("whatsapp-btn");

let shareLink = window.location.href;

generateBtn.addEventListener("click", () => {
  const name = input.value.trim();
  if (!name) {
    alert("Please enter your name");
    return;
  }

  shareLink =
    window.location.origin +
    window.location.pathname +
    "?from=" +
    encodeURIComponent(name);

  alert("Your greeting is ready! Now share it 🎄");
});

whatsappBtn.addEventListener("click", () => {
  const text = `🎄 Merry Christmas 🎅\nSee this greeting from me:\n${shareLink}`;
  window.open(
    "https://wa.me/?text=" + encodeURIComponent(text),
    "_blank"
  );
});
