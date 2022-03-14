const input = document.querySelector(".input");
const password = document.querySelector(".input_password");
const input_password = document.querySelector("#input_password");
const agine = document.querySelector("#agin");
const text_agine = document.querySelector("#text_input");
const btn  = document.querySelector(".btn");
const ul = document.querySelector(".mnue");
const li = document.querySelector(".mnue_item");
const man_input = document.querySelector(".main_input");

input_password.addEventListener("mouseenter",function () {
    password.type="text";
});
input_password.addEventListener("mouseleave",function () {
    password.type="password";
});

agine.addEventListener("keyup",function () {
    if (agine.value === password.value) {
        if (agine.value.length==0 && password.value.length==0) {
            text_agine.innerHTML="Can usage Empty";
            text_agine.style.color="gray";
        } else {
            text_agine.innerHTML="Every ting true cant passd :)";
            text_agine.style.color="green";
            btn.addEventListener("click",function () {
               const Cli = document.createElement("li");
               Cli.className="mnue_item";
               let user_name = document.querySelector("#users");
               Cli.innerHTML= user_name.value;
               ul.appendChild(Cli);
            });
        }
    }else{
        text_agine.innerHTML="Somting wrong...!";
        text_agine.style.color="red";
    }
});






