// ZOOM IN/ZOOM OUT PAGE TRANSITION 
document.addEventListener("DOMContentLoaded", () => {
  const gridWrappers = document.querySelectorAll(".grid-wrapper");
  
  gridWrappers.forEach((gridWrapper) => {
    gridWrapper.classList.add("initial");
  });
  
  gridWrappers.forEach((gridWrapper, index) => {
    setTimeout(() => {
      gridWrapper.classList.remove("initial");
      gridWrapper.classList.add("zoom-in");
    }, index * 500);
  });

  const links = document.querySelectorAll(".transition-link");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); 
      const href = link.getAttribute("href"); 
  
      gridWrappers.forEach((gridWrapper) => {
        gridWrapper.classList.remove("zoom-in");
        gridWrapper.classList.add("zoom-out");
      });
  
      setTimeout(() => {
        window.location.href = href;
      }, 1000); 
    });
  });
});

// AUTO TYPING ANIMATION

// AUTO TYPE YOUR NAME
setTimeout(() => {
  new Typed('.auto-type-name', {
    strings: ["Type your name"],
    typeSpeed: 150,
    backSpeed: 100,
    loop: false,
    showCursor: false
  });
}, 2500);

// AUTO TYPE YOUR TITLE
setTimeout(() => {
  new Typed('.auto-type-title', {
    strings: ["Type your title here"],
    // eg; strings: ["Software Developer", "Designer", "Front-end Developer", "Mobile Developer"]
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1500,
    loop: true,
    showCursor: false
  });
}, 3000);

// AUTO TYPE A DESCRIPTION OF YOURSELF
setTimeout(() => {
  new Typed('.about-me-text', {
    strings: ["Write a little bit about myself here ..."],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1500,
    loop: false,
    showCursor: true
  });
}, 2000);

// AUTO TYPE PROJECT TITLE FOR PROJECTS PAGE
setTimeout(() => {
  new Typed('.auto-type-Project-title', {
    strings: ["Projects"],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1500,
    loop: false,
    showCursor: true
  });
}, 1000);

// AUTO TYPE TEXT FOR PROJECTS PAGE
setTimeout(() => {
  new Typed('.auto-type-projectText', {
    strings: ["Here are a few personal projects I've worked on"],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1500,
    loop: false,
    showCursor: false
  });
}, 2000);


  




