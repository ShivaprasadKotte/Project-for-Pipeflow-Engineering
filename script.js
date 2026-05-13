/* =========================
   STICKY HEADER
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  const trigger = window.innerHeight * 0.7;

  if (window.scrollY > trigger) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }

});

/* =========================
   CAROUSEL
========================= */

const track = document.getElementById("carouselTrack");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const scrollValue = 380;

nextBtn.addEventListener("click", () => {

  track.scrollBy({
    left: scrollValue,
    behavior: "smooth"
  });

});

prevBtn.addEventListener("click", () => {

  track.scrollBy({
    left: -scrollValue,
    behavior: "smooth"
  });

});

/* =========================
   DRAG SUPPORT
========================= */

let isDragging = false;
let startX;
let scrollLeft;

track.addEventListener("mousedown", (e) => {

  isDragging = true;

  startX = e.pageX - track.offsetLeft;

  scrollLeft = track.scrollLeft;

});

track.addEventListener("mouseleave", () => {
  isDragging = false;
});

track.addEventListener("mouseup", () => {
  isDragging = false;
});

track.addEventListener("mousemove", (e) => {

  if (!isDragging) return;

  e.preventDefault();

  const x = e.pageX - track.offsetLeft;

  const walk = (x - startX) * 2;

  track.scrollLeft = scrollLeft - walk;

});