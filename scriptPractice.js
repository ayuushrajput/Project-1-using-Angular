var counter= document.querySelector(".counter");
var followers= document.querySelector(".followers");

let count=1;
setInterval(() => {
   if (count<1000) {
    count++;
         counter.innerText= count;
//counter.innerText= count;

   } 
}, 1);

setTimeout(() => {
  followers.innerText= "followers in Instagram! "  
}, 9000);