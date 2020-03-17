// const aboutElement = document.querySelectorAll("#about");
// let aboutElementEvent = document.addEventListener("scroll", () => {
//   const aboutTimeLineAnimation = anime.timeline({
//     easing: "easeOutExpo",
//     duration: 60
//   });

//   if (top > 740) {
//     aboutTimeLineAnimation.add({
//       targets: aboutElement,
//       translateX: [-200, 100],
//       duration: 1800,
//       autoplay: false,
//       scale: {
//         value: 1.1,
//         duration: 1600,
//         delay: function(el, i) {
//           return i * 100;
//         },
//         easing: "easeInOutQuart"
//       },
//       duration: 3000
//     });
//   } else {
//     return (document.querySelectorAll(
//       "#about"
//     ).onscroll = aboutTimeLineAnimation.pause());
//   }
// });
// // document.addEventListener("scroll", () => {
// //   const top = this.scrollY;
// //   if (top < 640) {
// //     aboutElementEvent.removeEventListener("scroll");
// //   }
// // });
