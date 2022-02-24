//Enter to paste text, space to submit, repeat for speed typing



  
    if(document.querySelectorAll("span[unselectable=on]").length==2){
      l = document.querySelectorAll("span[unselectable=on]").length
  mainText = document.querySelectorAll("span[unselectable=on]")[1].outerText
  
  first = document.querySelectorAll("span[unselectable=on]")[0].outerText
  text_arr = (first + mainText).split(" ")
  
  
  iteration = 0;
  document.querySelector(".txtInput").addEventListener("keypress",(e)=>{
  
  if(e.code == "Enter"){
  navigator.clipboard.writeText(text_arr[iteration])
  
  navigator.clipboard.readText().then(
   clipText => document.querySelector(".txtInput").value = clipText);
  iteration++
  }
  }
  )
  
  }
  
  
  
  else{
  first = document.querySelectorAll("span[unselectable=on]")[0].outerText
  second = document.querySelectorAll("span[unselectable=on]")[1].outerText
  mainText = document.querySelectorAll("span[unselectable=on]")[2].outerText
  text_arr = (first + second + mainText).split(" ")
  iteration = 0;
  document.querySelector(".txtInput").addEventListener("keypress",(e)=>{
  
  if(e.code == "Enter"){
  navigator.clipboard.writeText(text_arr[iteration])
  
  navigator.clipboard.readText().then(
   clipText => document.querySelector(".txtInput").value = clipText);
  iteration++
  }
  }
  )
  
  }
  
  
  const checker = setInterval(() => {
   if(document.querySelector(".text").innerHTML = 'Typing Challenge'){
     console.log("Done, you're being tested.")
     clearInterval(checker)
   }
  }  ,4000
  )  

function restart(){
const x =  ()=>{
  if(document.querySelectorAll("span[unselectable=on]").length==2){
    l = document.querySelectorAll("span[unselectable=on]").length
mainText = document.querySelectorAll("span[unselectable=on]")[1].outerText

first = document.querySelectorAll("span[unselectable=on]")[0].outerText
text_arr = (first + mainText).split(" ")


iteration = 0;
document.querySelector(".txtInput").addEventListener("keypress",(e)=>{

if(e.code == "Enter"){
navigator.clipboard.writeText(text_arr[iteration])

navigator.clipboard.readText().then(
 clipText => document.querySelector(".txtInput").value = clipText);
iteration++
}
}
)

}



else{
first = document.querySelectorAll("span[unselectable=on]")[0].outerText
second = document.querySelectorAll("span[unselectable=on]")[1].outerText
mainText = document.querySelectorAll("span[unselectable=on]")[2].outerText
text_arr = (first + second + mainText).split(" ")
iteration = 0;
document.querySelector(".txtInput").addEventListener("keypress",(e)=>{

if(e.code == "Enter"){
navigator.clipboard.writeText(text_arr[iteration])

navigator.clipboard.readText().then(
 clipText => document.querySelector(".txtInput").value = clipText);
iteration++
}
}
)

}


const checker = setInterval(() => {
 if(document.querySelector(".text").innerHTML = 'Typing Challenge'){
   console.log("Done, you're being tested.")
   clearInterval(checker)
 }
}  ,4000
)  
}
x()
}


 
  



