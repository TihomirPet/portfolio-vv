document.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  // gsap code here!
  let smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 2, // time for the content to catch up to the scroll position
    smoothTouch: 0.1, // Better not to use it or use a small value
    effects: true, // add some effects \(-_-)/
    // some callbacks

  });
});





// gsap.to('.header-TitleTop', {
//   x: 700,
//   duration: 3,
//   scrollTrigger: {
//     trigger: '.header-TitleTop',
//     start: 'top center',
//     markers: true,
//   },
// });
