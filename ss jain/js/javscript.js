window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("logo").style.width = "75px";
    document.getElementById("contact").style.display = "none";
    document.getElementById("logoTitle").style.fontSize = "22px";
    document.getElementById("nav").style.top = "0px";
    var media = window.matchMedia("(max-width:905px)");
    if(media.matches){
      document.getElementById("navLinks").style.top = "83px"
    }
    document.getElementById('burger').style.top = "25px"
  } else {
    document.getElementById("contact").style.display = "block";
    document.getElementById("logo").style.width = "100px";
    document.getElementById("logoTitle").style.fontSize = "24px";
    document.getElementById("nav").style.top = "50px";
    document.getElementById('burger').style.top = "40px"
    var media = window.matchMedia("(max-width:905px)");
    if(media.matches){
      document.getElementById("navLinks").style.top = "107px"
    }
}}
let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let placeImg = document.getElementById('placeImg');

first.addEventListener('click', ()=>{
  document.getElementById('placeImg').style.right = "0%";
  first.classList.add('active');
  second.classList.remove('active');
  third.classList.remove('active');
});
second.addEventListener('click', ()=>{
  document.getElementById('placeImg').style.right = "100%";
  second.classList.add('active');
  first.classList.remove('active');
  third.classList.remove('active');
});
third.addEventListener('click', ()=>{
  document.getElementById('placeImg').style.right = "200%";
  third.classList.add('active');
  second.classList.remove('active');
  first.classList.remove('active');
});
window.setInterval(moveImg, 9000);
function moveImg(){
   window.setTimeout(placeFirst, 3000);
   window.setTimeout(placeSecond, 6000);
   window.setTimeout(placeThird, 9000);
}
function placeFirst(){
  placeImg.style.right = "100%"

}
function placeSecond(){
  placeImg.style.right = "200%"
  
}
function placeThird(){
  placeImg.style.right = "0%"

}
let requItem = document.getElementById('rImg');
let countPlus = 0;
let countMinius = 0;
// for achivement
var achiveNum = document.querySelector(".num__group h1");
var achiveLeft = document.getElementById("achiveLeft");
achiveLeft.addEventListener('click', ()=>{
  achiveNum.style.right = "70px"
})


var burger = document.getElementById("burger");

var bugCount;

function burger(){
  if(bugCount == 1){
    document.getElementById("navLinks").style.right = "-200px"
    return bugCount = 0;
  }
  else{
    document.getElementById("navLinks").style.right = "0%"
    console.log('by');
    return bugCount = 1;
  }
}
