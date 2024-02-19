const ulnode=document.querySelector("ul");
const boton=document.querySelector("input[type='button'");
const al=document.querySelector("p#alert")
boton.addEventListener("click",function(){
    al.style.display='none';
    var a=document.querySelector('input[name="topic"]');
    var b=document.querySelector('input[name="content"]');
    if(a.value.trim()=='' || b.value.trim()==''){
        al.style.display='block';
        return;
    }
    

    ulnode.innerHTML+=`<li>
    <h4>${a.value}</h4>
    <p>${b.value}</p>
    <input type="button" value="delete">
    </li>`    
    a.value='';
    b.value='';
})
ulnode.addEventListener("click",function(e){
   this.removeChild(e.target.parentNode)

})