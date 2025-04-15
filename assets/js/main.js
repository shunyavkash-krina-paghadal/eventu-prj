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
const targetDate = new Date("2030-01-01T00:00:00").getTime();
function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerText = days.toString().padStart(4, "0");
  document.getElementById("hours").innerText = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerText = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerText = seconds
    .toString()
    .padStart(2, "0");
  if (distance < 0) {
    document.getElementById("days").innerText = "0000";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
  }
}
setInterval(updateCountdown, 1000);

// Fancybox
Fancybox.bind("[data-fancybox]", {
  // options if needed
  YouTube: {
    autoplay: true,
  },
});

// Conuter-1

const counters = document.querySelectorAll(".counter");
const speed = 200; // The lower the slower

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    // Lower inc to slow and higher to slow
    const inc = target / speed;

    // console.log(inc);
    // console.log(count);

    // Check if target is reached
    if (count < target) {
      // Add inc to count and output in counter
      counter.innerText = count + inc;
      // Call function every ms
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
