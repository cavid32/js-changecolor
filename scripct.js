// const img1 = document.getElementById("img1");
// const img2 = document.getElementById("img2");
// const img3 = document.getElementById("img3");

// next.addEventListener("click", function () {
//   img3.style.left = 0;
//   img1.style.display="none"
//   img2.style.display="none"
//   img3.style.display="block"
// });

// previous.addEventListener("click", function () {
//   img2.style.display="none"
//   img3.style.display="none";
//   img1.style.display="block";
//   img1.style.left = 0;
// // });
// const btn=document.getElementById("btn");
// const btn2=document.getElementById("btn2");
// let i=0;

// btn.addEventListener("click",function(){

//   let intervall = setInterval(function(){

//     i++
//     console.log(i);
//   },1000)

// });

// btn2.addEventListener("click",function(){
  
//   clearInterval(intervall);
//   console.log(i);
// })
const img1= document.getElementById("img1");
const img2= document.getElementById("img2");
const img3= document.getElementById("img3");

const left=document.getElementById("left");
const right =document.getElementById("right");
let imgs=img1+img2+img3

let random=Math.round(Math.random()*2)+1;

left.addEventListener("click",function(){
    
})