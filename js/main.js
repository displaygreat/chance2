const swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
const swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});

const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".navbar-panel");
const closeBtn = document.querySelector(".close-btn");

const disableScroll = () => {
  const scrollWidth = window.innerWidth - document.body.offsetWidth;

  document.body.dataset.scrollY = window.scrollY;

  document.body.style.cssText = `
    position: fixed;
    width: 100%;
    height: 100%;
    top: -${window.scrollY};
    left: 0;
    padding-right: ${scrollWidth}px;
    overflow: hidden;
  `;
};

const enableScroll = () => {
  document.body.style.cssText = "";
  window.scroll({
    top: document.body.dataset.scrollY,
  });
};

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("is-open");
  disableScroll();
});

closeBtn.addEventListener("click", () => {
  menu.classList.toggle("is-open");
  enableScroll();
});
