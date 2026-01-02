const lightbox = document.getElementById("eventHighlight-lightbox");
const lightboxImg = document.getElementById("eventHighlight-lightbox-img");
const body = document.body;

function openLightbox(imageSrc) {
  lightboxImg.src = imageSrc;

  // Flex display needed for centering
  lightbox.style.display = "flex";

  // Allow display:flex to apply, then trigger opacity
  requestAnimationFrame(() => {
    lightbox.classList.add("eventHighlight-visible");
  });

  body.classList.add("eventHighlight-overflow-hidden");
}

function closeLightbox() {
  lightbox.classList.remove("eventHighlight-visible");

  setTimeout(() => {
    lightbox.style.display = "none";
    lightboxImg.src = "";
  }, 300);

  body.classList.remove("eventHighlight-overflow-hidden");
}

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.style.display === "flex") {
    closeLightbox();
  }
});
