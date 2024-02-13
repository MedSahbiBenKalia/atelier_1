const ulnode=document.querySelector("ul");
const boton=document.querySelector("input[type='button'");
boton.addEventListener("click",function(){
    var a=document.querySelector('input[name="topic"]');
    var b=document.querySelector('input[name="content"]');
    if(a.value=='' || b.value==''){
        alert("un champs est vide !!!!");
        return;
    }

    ulnode.innerHTML+=`<li>
    <h4>${a.value}</h4>
    <p>${b.value}</p>
    </li>`    
    a.value='';
    b.value='';
})
