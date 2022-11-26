var counter= document.querySelector(".counter");
var followers= document.querySelector(".followers");

let count=1;
setInterval(()=>{
count++;
counter.innerText= count;


}, 100 );
