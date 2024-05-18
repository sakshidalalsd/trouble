let bt=document.querySelector("#btn");
let bt1=document.querySelector("#btn1");
let bt2=document.querySelector("#btn2");
let sks=document.querySelector("#sakshi");
let para=document.querySelector("#empty");
let inn=document.querySelector("#inempt");
var count=0;
function sum(){
  count++;
  inn.textContent=count;
}
function subtract(){
  count--;
  if(count>=0){
  inn.textContent=count;
  
}else if(count<0){
    let p2=document.createElement("p");
    sks.appendChild(p2);
    p2.textContent="Error cannot be below 0"
}
}
function allclear(){
   count=0;
   
   inn.textContent=count;
}
bt.addEventListener("click" ,subtract);
bt1.addEventListener("click" ,sum);
bt2.addEventListener("click" ,allclear);