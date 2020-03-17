const logoElement = document.querySelectorAll("#hero__image");
const introElement = document.querySelectorAll("#intro");
const aboutElement = document.querySelectorAll("#about");
const imageElement = document.querySelectorAll(".rounded");
// Create a timeline with default parameters

const timeLineAnimation = anime.timeline({
  easing: "easeOutExpo",
  delay: function(el, i) {
    return i * 0;
  },
  duration: 100
});
timeLineAnimation
  .add({
    targets: logoElement,
    translateX: [0, 250],
    duration: 2800,
    rotate: {
      value: "+=2turn",
      duration: 3800,
      easing: "easeInOutSine"
    },
    scale: {
      value: 1.2,
      duration: 1600,
      delay: 800,
      easing: "easeInOutQuart"
    }
  })
  .add({
    targets: introElement,
    translateY: [-1000, 150],
    duration: 600,
    scale: {
      value: 1.1,
      duration: 2600,
      delay: 500,
      easing: "easeInOutQuart"
    }
  })
  .add({
    targets: aboutElement,
    translateX: [-600, 10],
    duration: 100,
    autoplay: false,
    scale: {
      value: 1.1,
      duration: 1000,
      delay: function(el, i) {
        return i * 100;
      },
      easing: "easeInOutQuart"
    },
    duration: 3000
  });
