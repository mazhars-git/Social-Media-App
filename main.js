let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    formValidation();
})

let formValidation = () =>{
    if(input.value === ""){
        msg.innerHTML = "Posts cannot be Blank."
    }
    else{
        
        msg.innerHTML = ""
    }
}

