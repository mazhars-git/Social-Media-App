let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

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
        acceptData();
    }
}


let data = {};

let acceptData = () =>{
    data["text"]=input.value;
    createPost();
}


let createPost = () =>{
    posts.innerHTML += `
    
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i class="fa-solid fa-pen-to-square"></i>
            <i onClick="deletePost(this)" class="fa-solid fa-trash-can"></i>
        </span>
    </div>
    `
    input.value = '';
}

let deletePost = (e) =>{
    e.parentElement.parentElement.remove();
}
