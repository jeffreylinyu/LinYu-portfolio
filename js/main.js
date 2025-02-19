// 初始化 AOS
AOS.init();

// 初始化 Typed.js
var typed = new Typed("#typed", {
  strings: ["解決問題", "主動積極", "團隊協作與溝通", "持續學習", "責任感"],
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
  document.querySelectorAll(".flag").forEach((section) => {
    const rect = section.getBoundingClientRect();
    const navLink = document.querySelector(`nav a[href="#${section.id}"]`);
    if (rect.top <= 150 && rect.bottom >= 150) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });
});

// 監聽所有專案卡片的點擊事件，並根據 data-link 開啟不同的頁面
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const link = card.getAttribute("data-link");
    if (link) {
      window.open(link, "_blank");
    }
  });
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
