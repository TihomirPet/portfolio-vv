
function el(css){
	return document.querySelectorAll(css);
};



// console.log(dataToPass);

  // Function to read URL parameter
//   function getParameterByName(name) {
//     const url = new URL(window.location.href);
// 	//  console.log(url);
//     return url.searchParams.get(name);
//   }

  // Function to change the class name
//   function changeClassName() {
//     const className = getParameterByName('classname');
  
//     console.log(className);
//     if (className) {
//       const targetDiv = el('.test');
// 	  console.log(targetDiv);
//       targetDiv.classList.add(className);
//     }
//   }

  // Call the function to change the class name when the page loads
//   window.addEventListener('load', changeClassName);



  function changeCarouselClassName() {
    var className = localStorage.getItem('className');

    if (className) {
      var carouselDiv = document.querySelector('.carousel .carousel-item');
      carouselDiv.classList.add(className);
    }
  }

  // Add event listener to trigger class change on load
  window.addEventListener('load', changeCarouselClassName);
