let inputt = document.getElementById("inputt")
let msg = document.getElementById("msg")
let formm = document.getElementById("frm");
let posts = document.getElementById("posts");
formm.addEventListener("submit",(v)=>{
    v.preventDefault();
    formvalidation();
    inputt.value = "";
})

function formvalidation(){
    if(inputt.value === ""){
        msg.innerHTML = "post can not be blank!";
    }else if(inputt.value === " "){
        msg.innerHTML = "It contains only white spaces";
    }
    else{
        msg.innerHTML = "";
        collect_data();
    }
}

let data = {};

function collect_data(){
    data["text"] = inputt.value;
    console.log(data);
    display_data();
}

function display_data(){
    posts.innerHTML += `<div>
                <p>${data.text}</p>
                <span id="options">
                    <button id="ed" onClick="edit_post(this)">EDIT</button>
                    <button id="dl" onClick="delete_post(this)">DELETE</button>
                </span>
            </div>`;
}

function delete_post(e){
    e.parentElement.parentElement.remove();
}

function edit_post(e){
    inputt.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}