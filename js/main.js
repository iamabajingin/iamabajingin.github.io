/* Swiper Init */
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  mousewheel: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  on: {
    slideChange: function () {
      playIframe(this); // Autoplay the iframe in the current slide
    },
  },
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

function playIframe(swiper) {
  var activeSlide = swiper.slides[swiper.activeIndex];
  var iframe = activeSlide.querySelector(".swiper-iframe");

  if (iframe) {
    iframe.src = iframe.src; // Reload the iframe to autoplay
  }
}

/* Mobile Menu Toggler */
$(document).ready(function () {
  $("#toccer").click(function () {
    $(".ui.sidebar").sidebar("toggle");
  });
});

/* SHAPE FLIP */
$(document).ready(function () {
  $(".ui.shape").shape(); // Initialize the shape

  // Handle next button click
  $(".ui.button.next").click(function () {
    $(".ui.shape").shape("flip right");
  });

  // Handle previous button click
  $(".ui.button.previous").click(function () {
    $(".ui.shape").shape("flip left");
  });
});

$(".donation_progress").progress();

$(document).ready(function () {
  // Initialize Magnific Popup
  $("#image-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
    image: {
      titleSrc: function (item) {
        return '<a class="ui circular icon button close-btn"><i class="close icon"></i></a>';
      },
    },
    callbacks: {
      open: function () {
        // Close button functionality
        $(".close-btn").on("click", function () {
          $.magnificPopup.close();
        });
      },
    },
  });
});

// WOMEN EMPOWERING WOMEN WORD LOOP PULSE EFFECT
$("#empowering-text").transition("set looping").transition("pulse", "2000ms");

// Fullscreen Imager Code for Events
function openFullscreen(image) {
  const fullscreenContainer = document.getElementById("fullscreen-container");
  const fullscreenImage = document.getElementById("fullscreen-image");

  fullscreenImage.src = image.src;
  fullscreenContainer.style.display = "flex";
}

function closeFullscreen() {
  const fullscreenContainer = document.getElementById("fullscreen-container");
  fullscreenContainer.style.display = "none";
}

// Donate Amount Buttons click
const buttons = document.querySelectorAll(".donate_amount_punch");
const amountInput = document.getElementById("amountInput");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const value = this.getAttribute("data-value");
    amountInput.value = value;
    buttons.forEach((btn) => btn.classList.remove("primary"));
    this.classList.add("primary");
  });
});
