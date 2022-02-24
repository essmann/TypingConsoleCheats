words_0 = document.getElementById("row1").children
document.getElementById("inputfield").addEventListener("keypress",hack)
document.getElementById("reload-btn").addEventListener("click",reset)
odd = 0
function reset(){
    odd = 0
    hack()
}
function hack(e){
        if(e.code == 'Enter'){
            document.getElementById("inputfield").value = words_0[odd].innerText 
            odd+=1
            console.log(odd);
        }
    
        
    
    }

//words[word_pointer].substr(0, $inputfield.val().length)