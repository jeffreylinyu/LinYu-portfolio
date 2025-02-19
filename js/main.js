// 初始化 AOS
AOS.init();

// 初始化 Typed.js
var typed = new Typed("#typed", {
  strings: ["未來", "創意", "突破"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 2000,
  loop: true,
});

// 初始化 particles.js (粒子背景)
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: { enable: true, speed: 6 },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: { repulse: { distance: 200 }, push: { particles_nb: 4 } },
  },
  retina_detect: true,
});

// 滾動進度條與導覽列高亮
const progressBar = document.getElementById("progressBar");
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset;
  const docHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPercent + "%";

  // 導覽列連結高亮
  document.querySelectorAll("section").forEach((section) => {
    const rect = section.getBoundingClientRect();
    const navLink = document.querySelector(`nav a[href="#${section.id}"]`);
    if (rect.top <= 150 && rect.bottom >= 150) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });
});

// Modal 顯示專案詳情
const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.querySelector(".modal-close");
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3").innerText;
    const description = card.querySelector("p").innerText;
    const imgSrc = card.querySelector("img").src;
    modalBody.innerHTML = `
      <img src="${imgSrc}" alt="${title}" style="width:100%; border-radius:10px; margin-bottom:20px;">
      <h2>${title}</h2>
      <p>${description}</p>
    `;
    modal.classList.add("active");
  });
});
modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

// GSAP 動畫：讓各區塊標題淡入下滑
gsap.from(".section-title", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power2.out",
  stagger: 0.2,
});

// 初始化 VanillaTilt.js 為技能卡片增加 3D 傾斜效果
VanillaTilt.init(document.querySelectorAll(".skill-category"), {
  max: 35,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
});
