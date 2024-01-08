let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let lis = document.querySelector("li");

btn.addEventListener("click",function(event) {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let btnDl = document.createElement("button");
    btnDl.innerText = "delete";
    btnDl.classList.add("delete");
    item.appendChild(btnDl);

    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log(listItem.innerText  );
    }
});





// let btnDl = document.querySelectorAll(".delete");

// for(btn of btnDl){
// btn.addEventListener("click",function(){
//     let par = this.parentElement;
//     console.log(par.innerText);
//     par.remove();
    
// });
// }


