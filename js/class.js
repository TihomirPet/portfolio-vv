


function el(css){
	return document.querySelector(css);
};
let comment = document.getElementsByClassName('img-hover');




 function sendClassNameToB() {
   let classNameToSend = 'active'; // Replace "desiredClassName" with the class name you want to pass
   localStorage.setItem('className', classNameToSend);
 }
// el('#send').addEventListener('onclick', sendClassNameToB);


for (var i = 0; i < comment.length; i++) {
  comment[i].addEventListener('click', sendClassNameToB);
}