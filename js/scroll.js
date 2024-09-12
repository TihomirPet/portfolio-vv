document.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, timeline, SplitText);
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


let tl = gsap.timeline();



// gsap.from('.header', {
//   x: 300,
//   duration: 3,
//   scrollTrigger: {
//     trigger: '.header',
//     start: 'top center',
//     markers: true,
   
//   },
// });


// animation background
tl.fromTo(
  '.header-video',
  { opacity: 0, z: '-800', scale: 2 },
  {
    opacity: 1,
    duration: 2,
    // stagger: 0.5,
    scale: 1,
    ease: 'Power.easeInOut',
    y: '0',
  }
);


// animation 
tl.fromTo(
  [, '.animateSkils', '.nav-holder', ],
  { opacity: 0, y: '-50' },
  {
    opacity: 1,
    duration: 0.9,
    stagger: 0.5,
    ease: 'Power.easeInOut',
    y: '0',
  }
);



// (split = new SplitText('header-text', { type: 'words' })),
//   tl.from(split.chars, {
//     opacity: 0,
//     y: 50,
//     duration: 2,
//     ease: 'back',
//     stagger: 0.05,
//   });



