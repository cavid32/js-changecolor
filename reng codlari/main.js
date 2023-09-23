const btn = document.getElementById("btn");

let rengler = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let yarananReng = "#";

for (let i = 0; i < 6; i++) {
  let random = parseInt(Math.random() * 16);
  yarananReng += rengler[random];
}
document.body.style.backgroundColor = yarananReng;
