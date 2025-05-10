//
// Place any custom JS here
//

const returnToTopBtn = document.getElementById("returnToTop");

document.onscroll = () => {
  if (document.scrollingElement.scrollTop > 0){
    returnToTopBtn.classList.remove("d-none");
  } else {
    returnToTopBtn.classList.add("d-none");
  }
};

returnToTopBtn.onclick = () => document.scrollingElement.scrollTo(0, 0);

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  });

// Reduce animation motion for accessibility by
// disabling autoplay on videos when prefers-reduced-motion is enabled.
const mediaQuery = window.matchMedia('(prefers-reduced-motion: no-preference)');

const setAutoplay = () => {
  Array.from(document.getElementsByTagName("video")).forEach(
    (video) => {
      video.autoplay = mediaQuery.matches;
      if (mediaQuery.matches){
        video.play();
      } else {
        video.pause();
      }
    }
  );
}

mediaQuery.onchange = setAutoplay;
setAutoplay();