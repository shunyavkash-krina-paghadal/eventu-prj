document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const menuOverlay = document.getElementById("menu-overlay");
  const closeBtn = document.getElementById("close-btn");

  menuBtn.addEventListener("click", function () {
    menuOverlay.classList.add("active");
  });

  closeBtn.addEventListener("click", function () {
    menuOverlay.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const openReportsBtn = document.getElementById("openModal");
  const reportModal = document.getElementById("report-modal");
  const closeReportsBtn = document.querySelector(".close-icons");
  const body = document.body;
  if (openReportsBtn && reportModal && closeReportsBtn) {
    openReportsBtn.addEventListener("click", function () {
      reportModal.classList.add("show");
      body.style.overflow = "hidden";
    });
    closeReportsBtn.addEventListener("click", function () {
      reportModal.classList.remove("show");
      body.style.overflow = "auto";
    });
    reportModal.addEventListener("click", function (e) {
      if (e.target === reportModal) {
        reportModal.classList.remove("show");
        body.style.overflow = "auto";
      }
    });
  }
});

// counter
const now = new Date();
const targetDate = new Date(now.getTime() + 1756 * 24 * 60 * 60 * 1000);
function updateCountdown() {
  const current = new Date();
  const diff = targetDate - current;
  if (diff <= 0) {
    document.getElementById("days").textContent = "0000";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  document.getElementById("days").textContent = days
    .toString()
    .padStart(4, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}
setInterval(updateCountdown, 1000);
updateCountdown(); // initial call
