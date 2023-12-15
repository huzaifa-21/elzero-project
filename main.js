// skill = document.querySelectorAll("div.skill .prog");
// console.log(skill.getAttribute("progress"))
// getAttribute

let skills = document.querySelector(".skills")
let prog = document.querySelectorAll(".skills .container .skill .prog ")
let span = document.querySelectorAll(".skills .container .skill .prog span")
// console.log(skills)
// console.log(prog)
prog = [...prog]
span = [...span]
// console.log(prog[0])
window.onscroll = function () {

  if (window.scrollY >= skills.offsetTop - 100) {
    for (let i = 0; i < prog.length; i++) {
      span[i].style.width = span[i].dataset.width
    }
  }
  
}
