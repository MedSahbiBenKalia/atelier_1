const ul=document.querySelector('ul');

ul.addEventListener("click",function(e){
    e.target.style.color=`rgb(${Math.floor(Math.random() * 250) + 1},${Math.floor(Math.random() * 250) + 1},${Math.floor(Math.random() * 250) + 1})`;
})

