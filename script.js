var counter= document.querySelector(".counter");
var followers= document.querySelector(".followers");

let count=1;
setInterval(() => {
   if (count<1000) {
    count++;
    counter.innerText= count;
   } 
}, 1);
var counter= document.querySelector(".counter");
var followers=document.querySelector(".followers");

// let count2=1;
// setInterval(() => {
//    if (count<1000) {
//     count++;
//     counter.InnerText= count;
//    } 
// }, 0.5);
setTimeout(() => {
    followers.innerText= "Followers on Instagram!"
}, 9000);
