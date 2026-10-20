// 구글 폼 링크가 준비되면 여기에 넣으세요. 비어 있으면 "준비 중" 안내가 표시됩니다.
const COFFEE_CHAT_URL = "https://forms.gle/rhPWbqgTycPKjw3u7";

(function () {
  // 커피챗 버튼 링크 연결
  const toast = document.getElementById("toast");
  let toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
  }

  document.querySelectorAll(".js-coffee-link").forEach((a) => {
    if (COFFEE_CHAT_URL) {
      a.href = COFFEE_CHAT_URL;
      a.target = "_blank";
      a.rel = "noopener";
    } else {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        showToast("커피챗 신청 폼을 준비 중이에요 ☕");
      });
    }
  });

  // 토픽 카드 아코디언
  document.querySelectorAll(".card-head").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card");
      const open = card.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
  });

  // 스크롤 등장 애니메이션
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 70}ms`;
    io.observe(el);
  });

  // 상단 바 배경 + 하단 고정 CTA 표시 (히어로 지나고, 커피챗 섹션 전까지)
  const topbar = document.getElementById("topbar");
  const sticky = document.getElementById("stickyCta");
  const hero = document.querySelector(".hero");
  const coffee = document.getElementById("coffee");

  function onScroll() {
    const y = window.scrollY;
    topbar.classList.toggle("scrolled", y > 10);
    const pastHero = y > hero.offsetHeight * 0.6;
    const atCoffee = coffee.getBoundingClientRect().top < window.innerHeight * 0.85;
    sticky.classList.toggle("show", pastHero && !atCoffee);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  document.getElementById("year").textContent = new Date().getFullYear();
})();
