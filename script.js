function startAttack() {
  document.documentElement.requestFullscreen?.();
  document.getElementById("main").remove();

  const audio = document.getElementById("virusSound");
  audio.play();

  const vfx = document.getElementById("virusEffect");
  vfx.style.display = 'block';

  const interval = setInterval(() => {
    const span = document.createElement("div");
    span.innerText = randomText();
    span.style.position = 'absolute';
    span.style.left = Math.random() * window.innerWidth + 'px';
    span.style.top = Math.random() * window.innerHeight + 'px';
    span.style.fontSize = (Math.random() * 20 + 10) + 'px';
    span.style.color = ["red", "lime", "yellow", "white", "magenta"][Math.floor(Math.random() * 5)];
    span.style.zIndex = 9999;
    document.body.appendChild(span);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    document.body.innerHTML = `<h1 style="color:red;text-align:center;margin-top:30vh;">💀 SYSTEM TERMINATED 💀</h1>`;
    document.body.style.background = "black";
  }, 60000);
}

function randomText() {
  const texts = [
    "YOU ARE AN IDIOT", "SYSTEM INFECTED", "ERROR 0x000f", "WKWKWK BY HM MODZ TEAM",
    "VIRUS MALWARE TROJAN", "DETECTED SPYWARE", "HACKED", "💀💀💀",
    "FORCE CLOSE", "LOADING DESTRUCTION", "HAHAHAHA", "BY HM MODZ VIP"
  ];
  return texts[Math.floor(Math.random() * texts.length)];
}

document.addEventListener('gesturestart', e => e.preventDefault());
document.addEventListener('touchmove', e => {
  if (e.scale !== 1) e.preventDefault();
}, { passive: false });