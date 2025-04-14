// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.

import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


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

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  });