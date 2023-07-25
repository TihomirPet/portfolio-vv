// some other file
// import { a } from '../js/classId.js';
// console.log(a );


function el(css){
	return document.querySelector(css);
};
let comment = document.getElementsByClassName('img-hover');


// export const link = el('.test');
// console.log(link);
// let dataFromA = localStorage.getItem('myData');


// if (dataFromA && dataFromA === '.carousel-item') {
// console.log("dataFromA");

// let elementToChange = document.getElementById("one")
// elementToChange.classList.add('test')

// }

 function sendClassNameToB() {
   let classNameToSend = 'active'; // Replace "desiredClassName" with the class name you want to pass
   localStorage.setItem('className', classNameToSend);
 }
// el('#send').addEventListener('onclick', sendClassNameToB);


for (var i = 0; i < comment.length; i++) {
  comment[i].addEventListener('click', sendClassNameToB);
}