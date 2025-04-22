// overlay
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const menuOverlay = document.getElementById("menu-overlay");
  const closeBtn = document.getElementById("close-btn");

  menuBtn.addEventListener("click", function () {
    menuOverlay.classList.add("active");
    document.body.classList.add("no-scroll");
  });

  closeBtn.addEventListener("click", function () {
    menuOverlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});

// reports-overlay
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
      observer.unobserve(entry.target);
    }
  });
}, options);

counters.forEach((counter) => {
  observer.observe(counter);
});

// Loader
$(document).ready(function () {
  $("body").addClass("no-scroll");

  $(window).on("load", function () {
    $(".loader").delay(2000).fadeOut("slow");
    $("#overlayer")
      .delay(2000)
      .fadeOut("slow", function () {
        $("body").removeClass("no-scroll");
      });
  });
});

// ABOUT-PAGE

var swiper = new Swiper(".reviewSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Back-to-top

const scrollBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "12/12/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "Today is the Day!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
      //seconds
    }, 0);
})();
