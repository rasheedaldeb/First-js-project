// ============================== Task 1 ============================
const bigAmg = document.querySelector(".image img")
const icon1 = document.querySelector(".icons :nth-child(1)")
const icon2 = document.querySelector(".icons :nth-child(2)")
const icon3 = document.querySelector(".icons :nth-child(3)")
const icon4 = document.querySelector(".icons :nth-child(4)")
const icon5 = document.querySelector(".icons :nth-child(5)")
const container = document.querySelector(".task-one-container")
icon1.addEventListener("click" , ()=>{
    if (container.style.backgroundColor!="#c82525") {
        container.style.backgroundColor="#c82525"
        bigAmg.src="./assets/images/4.png"
    }else{
        container.style.backgroundColor=""
    }
})
icon2.addEventListener("click" , ()=>{
    if (container.style.backgroundColor !="#91a9c1") {
        container.style.backgroundColor="#91a9c1";
        bigAmg.src='./assets/images/1.png'
    }
    else{
        container.style.backgroundColor="#c82525";
    }
})
icon3.addEventListener("click" , ()=>{
    if (container.style.backgroundColor !="#4b4a46") {
        container.style.backgroundColor="#4b4a46";
        bigAmg.src='./assets/images/2.png'
    }
    else{
        container.style.backgroundColor="#c82525";
    }
})
icon4.addEventListener("click" , ()=>{
    if (container.style.backgroundColor !="#e4cfb4") {
        container.style.backgroundColor="#e4cfb4";
        bigAmg.src='./assets/images/3.png'
    }
    else{
        container.style.backgroundColor="#c82525";
    }
})
icon5.addEventListener("click" , ()=>{
    if (container.style.backgroundColor !="#b79948") {
        container.style.backgroundColor="#b79948";
        bigAmg.src='./assets/images/0.png'
    }
    else{
        container.style.backgroundColor="#c82525";
    }
})

// ============================== Task 2 ============================
const darkLight = document.querySelector("#task-two-content")
const modeIcon = document.querySelector("#mode-icon img")
modeIcon.addEventListener("click" , ()=>{
    if (darkLight.style.backgroundColor!="white") {
        darkLight.style.backgroundColor="white";
        darkLight.style.color="black"
        modeIcon.src="./assets/images/icons/moon.svg"
    }else{
        darkLight.style.backgroundColor="";
        darkLight.style.color=""
        modeIcon.src="./assets/images/icons/sun.svg"
    }
})
// ============================== Task 3 ============================
const questionbox1 = document.querySelector(".box-1")
const questionbox2 = document.querySelector(".box-2")
const questionbox3 = document.querySelector(".box-3")
const arrow = document.querySelector("#arrow-1")
const arrow2 = document.querySelector("#arrow-2")
const arrow3 = document.querySelector("#arrow-3")
const answer = document.querySelector("#answer-1")
const answer2 = document.querySelector("#answer-2")
const answer3 = document.querySelector("#answer-3")
questionbox1.addEventListener("click" , ()=>{
    if (answer.style.display!="block") {
        answer.style.display="block"
        arrow.style.transform="rotate(180deg)"
    }else{
        answer.style.display="none"
        arrow.style.transform="rotate(0deg)"
    }
})
questionbox2.addEventListener("click" , ()=>{
    if (answer2.style.display!="block") {
        answer2.style.display="block"
        arrow2.style.transform="rotate(180deg)"
    }else{
        answer2.style.display="none"
        arrow2.style.transform="rotate(0deg)"
    }
})
questionbox3.addEventListener("click" , ()=>{
    if (answer3.style.display!="block") {
        answer3.style.display="block"
        arrow3.style.transform="rotate(180deg)"
    }else{
        answer3.style.display="none"
        arrow3.style.transform="rotate(0deg)"
    }
})
// ============================== Task 4 ============================
const star1 = document.querySelector(".stars :nth-child(1)")
const star2 = document.querySelector(".stars :nth-child(2)")
const star3 = document.querySelector(".stars :nth-child(3)")
const star4 = document.querySelector(".stars :nth-child(4)")
const star5 = document.querySelector(".stars :nth-child(5)")
const descrip = document.querySelector(".description")
star1.addEventListener("click" , ()=>{
    if ( star1.style.color!="goldenrod") {
        star1.style.color="goldenrod"
        descrip.innerHTML="I just hate it &#128545;"
    }else{
        star1.style.color=""
        star2.style.color=""
        star3.style.color=""
        star4.style.color=""
        star5.style.color=""
        descrip.innerHTML="Describe your rating"
    }
})
star2.addEventListener("click" , ()=>{
    if (star2.style.color!="goldenrod") {
        star1.style.color="goldenrod"
        star2.style.color="goldenrod"
        descrip.innerHTML="I don't like it &#128530;"
    }else{
        star2.style.color=""
        star3.style.color=""
        star4.style.color=""
        star5.style.color=""
        descrip.innerHTML="I just hate it &#128545;"
    }
})
star3.addEventListener("click" , ()=>{
    if (star3.style.color!="goldenrod") {
        star3.style.color="goldenrod"
        star1.style.color="goldenrod"
        star2.style.color="goldenrod"
        descrip.innerHTML="It Is awsome &#128524;"
    }else{
        star3.style.color=""
        star4.style.color=""
        star5.style.color=""
        descrip.innerHTML="I don't like it &#128530;"
    }
})
star4.addEventListener("click" , ()=>{
    if(star4.style.color!="goldenrod"){
        star4.style.color="goldenrod"
        star3.style.color="goldenrod"
        star1.style.color="goldenrod"
        star2.style.color="goldenrod"
        descrip.innerHTML="I Love It &#128525;"
    }else{
        star4.style.color=""
        star5.style.color=""
        descrip.innerHTML="It Is awsome &#128524;"
    }
})
star5.addEventListener("click" , ()=>{
    if (star5.style.color!="goldenrod ") {
        star1.style.color="goldenrod"
        star2.style.color="goldenrod"
        star3.style.color="goldenrod"
        star4.style.color="goldenrod"
        star5.style.color="goldenrod"
        descrip.innerHTML="I Love It &#128525;"
    }else{
        star5.style.color=""
    }
})
// ============================= Task 5 ============================
const li1 = document.querySelector("ul :nth-child(1)")
const li2 = document.querySelector("ul :nth-child(2)")
const li3 = document.querySelector("ul :nth-child(3)")
const male = document.getElementsByClassName("male-tab")
const famale = document.getElementsByClassName("female-tab")
li1.addEventListener("click" , ()=>{
    if (male[0].style.display!="block") {
        male[0].style.display="block"
    }else if(famale[0].style.display="none"){
        famale[0].style.display="block"
    }
    li1.style.backgroundColor="#7fc469"
    li1.style.color="white"
    li2.style.backgroundColor=""
    li2.style.color=""
    li3.style.backgroundColor=""
    li3.style.color=""
})
li2.addEventListener("click" , ()=>{
    if (famale[0].style.display!="none") {
        famale[0].style.display="none"
        male[0].style.display="block"
    }
    li2.style.backgroundColor="#7fc469"
    li2.style.color="white"
    li1.style.backgroundColor="#e9ecf1"
    li1.style.color="black"
    li3.style.backgroundColor=""
    li3.style.color=""
})
li3.addEventListener("click" , ()=>{
    if (male[0].style.display!="none") {
        male[0].style.display="none"
        famale[0].style.display="block"
    }
    li3.style.backgroundColor="#7fc469"
    li3.style.color="white"
    li2.style.backgroundColor=""
    li2.style.color=""
    li1.style.backgroundColor="#e9ecf1"
    li1.style.color="black"
})
// ============================== Task 6 ============================
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const slids = document.querySelectorAll(".slide")
let count=0
prev.addEventListener("click" , ()=>{
    if (count==slids.length-1) {
        count=0
    }else{
        count++
    }
    slids.forEach((e)=>{
        e.style.transform="translatex(-"+count * 100 +"%)"
    })
})
next.addEventListener("click" , ()=>{
    if (count==0) {
        count=slids.length-1
    }else{
        count--
    }
    slids.forEach((e)=>{
        e.style.transform="translatex(-"+count * 100 +"%)"
    })
})
// ============================== Task 7 ============================
const bigimg = document.getElementById("mainImg")
const smallimg = document.getElementsByClassName("small-img")
smallimg[0].addEventListener("click" , ()=>{
    bigimg.src="assets/images/f4.png"
})
smallimg[1].addEventListener("click" , ()=>{
    bigimg.src="assets/images/f2.png"
})
smallimg[2].addEventListener("click" , ()=>{
    bigimg.src="assets/images/f3.png"
})
smallimg[3].addEventListener("click" , ()=>{
    bigimg.src="assets/images/f1.png"
})
smallimg[4].addEventListener("click" , ()=>{
    bigimg.src="assets/images/f4.png"
})