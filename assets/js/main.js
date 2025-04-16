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

const counters = document.querySelectorAll(".count");

const options = {
  threshold: 0.6,
};

const runCounter = (counter) => {
  let startNumber = 0;
  const endNumber = +counter.getAttribute("data-number");

  const interval = setInterval(() => {
    startNumber++;
    counter.innerText = startNumber;
    if (startNumber >= endNumber) {
      clearInterval(interval);
    }
  }, 30);
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      runCounter(entry.target);
      observer.unobserve(entry.target); // Run only once
    }
  });
}, options);

counters.forEach((counter) => {
  observer.observe(counter);
});
