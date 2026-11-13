// ======================================
// TRAIN TO UDAIPUR
// Website Animation Controller
// ======================================


// 1. ANIMATED STARS

const starsContainer = document.querySelector(".stars");

if (starsContainer) {
  for (let i = 0; i < 110; i++) {
    const star = document.createElement("div");

    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 4 + "s";
    star.style.animationDuration =
      (2 + Math.random() * 4) + "s";

    starsContainer.appendChild(star);
  }
}


// 2. SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

revealElements.forEach(element => {
  observer.observe(element);
});


// 3. READING PROGRESS BAR

const progressBar = document.getElementById("progress");

function updateProgress() {
  const scrollTop = window.scrollY;

  const pageHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const percentage = pageHeight > 0
    ? (scrollTop / pageHeight) * 100
    : 0;

  if (progressBar) {
    progressBar.style.width = percentage + "%";
  }
}

window.addEventListener("scroll", updateProgress, {
  passive: true
});


// 4. BACKGROUND MUSIC

const musicButton = document.getElementById("musicButton");
const music = document.getElementById("ambientSound");

let musicPlaying = false;

if (musicButton && music) {
  musicButton.addEventListener("click", async () => {

    if (!musicPlaying) {
      try {
        await music.play();
        musicPlaying = true;
        musicButton.innerHTML = "♫ <span>Sound On</span>";
      } catch (error) {
        console.log("Please add assets/ambient.mp3");
      }

    } else {
      music.pause();
      musicPlaying = false;
      musicButton.innerHTML = "♫ <span>Sound Off</span>";
    }

  });
}


// 5. SMOOTH CHAPTER NAVIGATION

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(event) {

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

  });

});


// 6. WEBSITE CONSOLE MESSAGE

console.log(
  "TRAIN TO UDAIPUR — Some journeys are not about reaching a destination."
);
