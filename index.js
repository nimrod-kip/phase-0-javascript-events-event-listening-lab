const input = document.getElementById("button");

 

function addingEventListener(){
    input.addEventListener("click", clickAlert)

    function clickAlert(e) {
     e.preventDefault(); 
     alert ("Hee hee, that tickles!")  
    } 

}