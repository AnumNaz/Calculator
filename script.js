let input= document.querySelector("input");
let number = Array.from(document.querySelectorAll(".val"));
let allClear= document.querySelector(".allClear");
let clear= document.querySelector(".clear");
let equal = document.querySelector(".equal");
let body= document.querySelector("body");
let night= document.querySelector(".night");
let day= document.querySelector(".day");
let wrap= document.querySelector(".wrap");
let button= Array.from(document.querySelectorAll(".btn"));

console.log(button);




number.forEach((e)=>{
    console.log(e.textContent);
    e.addEventListener("click",()=>{
         
        input.value= input.value.slice(0,input.selectionStart)+ e.textContent + input.value.slice(input.selectionEnd);
        input.focus();

        
    })
   
})


allClear.addEventListener("click", ()=>{
    input.value="";
})


clear.addEventListener("click", ()=>{
    input.value = input.value.slice(0,input.selectionStart-1)+input.value.slice(input.selectionEnd);
    
    
    input.focus();
})

equal.addEventListener("click", ()=>{
    try {
        console.log("Evaluating:", input.value);
        input.value = eval(input.value);
    } catch (error) {
        console.error("Evaluation error:", error);
        input.value = 'Error';
    }
})


