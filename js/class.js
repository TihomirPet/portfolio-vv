// some other file
// import { a } from '../js/classId.js';
// console.log(a );


function el(css) {
  return document.querySelectorAll(css);
}

export const link = el('.test');
console.log(link);