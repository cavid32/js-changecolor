// const prev = document.getElementById("prev");
// const next = document.getElementById("next");
// const carouselItem = document.querySelectorAll(".carousel-item");

// let saygac = 0;

// carouselItem.forEach(function (slayd, sira) {
//   slayd.style.left = `${sira * 100}%`;
// });

// function novbetiSlayd() {
//     if (saygac == carouselItem.length-1) {
//         saygac=0
//         carouselItem[0].style.transform = `translateX(0%)`;
//     }else{
//         saygac++;
//         console.log(saygac + "next if");
//         carouselItem[saygac].style.transform = `translateX(-${saygac * 100}%)`;
//     }
// }
// function oncekiSlayd() {
//   if (saygac == 0) {
//     saygac = carouselItem.length - 1;
//     console.log(saygac + " if");
//     carouselItem[saygac].style.transform = `translateX(-${saygac * 100}%)`;
//   } else {
//     saygac--;
//     console.log(saygac + " else");
//     carouselItem[saygac].style.transform = `translateX(${saygac * 100}%)`;
//   }
// }
// prev.addEventListener("click", oncekiSlayd);
// next.addEventListener("click", novbetiSlayd);

// const rengler = ["#ababab", "#666222", "green", "red"];

// const btn = document.getElementById("btn");
// let i = 0;
// btn.addEventListener("click", function () {
// 1ci usul
// if (i == rengler.length) {
//   i = 0;
//   document.body.style.backgroundColor = rengler[i];
// } else {
//   i++;
//   document.body.style.backgroundColor = rengler[i];
// }

// 2ci usul
// const randomReng = parseInt(Math.random() * rengler.length);
// document.body.style.backgroundColor = rengler[randomReng];

// let randomQirmizi = parseInt(Math.random() * 255);
// let randomYasil = parseInt(Math.random() * 255);
// let randomMavi = parseInt(Math.random() * 255);

// console.log(randomQirmizi);
// console.log(randomYasil);
// console.log(randomMavi);

// bir rengin randomundan olan rgb
// document.body.style.backgroundColor = `rgb(${randomQirmizi}, ${randomQirmizi}, ${randomQirmizi})`;

// hamsi random rgb
//   document.body.style.backgroundColor = `rgb(${randomQirmizi}, ${randomYasil}, ${randomMavi})`;
// });

// btn.addEventListener("click", function () {
//   let randomone = parseInt(Math.random() * 6);
//   let randomtwo = parseInt(Math.random() * 6);
//   let randomthree = parseInt(Math.random() * 6);
//   let randomfour = parseInt(Math.random() * 6);
//   let randomfive = parseInt(Math.random() * 6);
//   let randomsix = parseInt(Math.random() * 6);
//   console.log(`#(${randomone}${randomtwo}${randomthree}${randomfour}${randomfive}${randomsix})`);
//   document.body.style.backgroundColor = `#${randomone}${randomtwo}${randomthree}${randomfour}${randomfive}${randomsix}`;
//   console.log(randomfive);
// });

// // herflerle yolu//
// const btn = document.getElementById("btn");
// let rengler = ["A", "B", "C", "D", "E", "F"];
// let i = 0;
// btn.addEventListener("click", function () {
//   let randomone = parseInt(Math.random() * 6);
//   let randomtwo = parseInt(Math.random() * 6);
//   let randomthree = parseInt(Math.random() * 6);
//   let randomfour = parseInt(Math.random() * 6);
//   let randomfive = parseInt(Math.random() * 6);
//   let randomsix = parseInt(Math.random() * 6);
//   document.body.style.backgroundColor = `#${rengler[randomone]}${rengler[randomtwo]}${rengler[randomthree]}${rengler[randomfour]}${rengler[randomfive]}${rengler[randomsix]}`;
//   console.log(`#${rengler[randomone]}${rengler[randomtwo]}${rengler[randomthree]}${rengler[randomfour]}${rengler[randomfive]}${rengler[randomsix]}`);
// });


// const btn = document.getElementById("btn");
// const number1 = document.getElementById("number1");
// const number2 = document.getElementById("number2");
// const sum = document.getElementById("sum");
// const emeliyyat = document.getElementById("emeliyyat");

// btn.addEventListener("click", function () {
//   if (emeliyyat.value == "+") {
//     sum.value = Number(number1.value) + Number(number2.value);
//   }
//   else if (emeliyyat.value == "-") {
//     sum.value = Number(number1.value) - Number(number2.value);
//   }
//   else if (emeliyyat.value == "*") {
//     sum.value = Number(number1.value) * Number(number2.value);
//   }
//   else {
//     sum.value = Number(number1.value) / Number(number2.value);
//   }

// });

// Hamburg menu
// const menu = document.getElementById("menu");
// const Home = document.getElementById("Home");
// const About = document.getElementById("About");
// const Careers = document.getElementById("Careers");
// const Contact = document.getElementById("Conract");
// const Shopping = document.getElementById("Shopping");
// const all = document.getElementById("all");
// const back= document.getElementById("back")

// menu.addEventListener("click", function () {
//   all.style.display = "block";
//   menu.style.display="none"
  
//   back.style.display="block" ;
// });
// back.addEventListener("click",function(){
//     back.style.display="none" ;
//     all.style.display = "none";
//     menu.style.display="block" 
// })

// calc2
// const number1=document.getElementById("number1");
// const number2=document.getElementById("number2");
// const emeliyyat=document.getElementById("emeliyyat");
// const btn = document.getElementById("btn");
// const netice=document.getElementById("netice");

// btn.addEventListener("click",function(){
//   if(emeliyyat.value=="+"){
// netice.value=Number(number1.value)+Number(number2.value)
//   }
//   else if(emeliyyat. value=="-"){
//     netice.value=Number(number1.value)-Number(number2.value)
//   }
//   else if(emeliyyat. value=="*"){
//     netice.value=Number(number1.value)*Number(number2.value)
//   }
//   else {
//     netice.value=Number(number1.value)/Number(number2.value)
//   }
// })

const div=document.querySelector(".div");
const back=document.getElementById("back");

div.addEventListener("click",function(){
  div.style.display="none";
  back.style.display="block"
})
back.addEventListener("click",function(){
  back.style.display="none";
  div.style.display="block";    
})
