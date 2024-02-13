var ele=document.getElementById("botton")
var ele1=document.querySelector("p.hidden")
var option;

function fonctionCal(input,rep){
    var text
    var status=0;
    var i=0;
    while(status==0 && i<rep){
        var choix=prompt(`entrer votre num ${i+1}/${rep} :`);
        if(choix==null){return}
        if(isNaN(choix)){
            alert("entrer un entier !!!")
            continue;
        }
        if (choix==input){
            alert("you have won");
            status=1;
            
        }
        else 
            {
            if (input-choix<0) {text="down";}
            if (input-choix>0) {text="up";}

            alert(`not true  go ${text}` );
            }
        i++;
    }
    if(status==0){
    alert(`you have lost the number is ${input}` )
    }
}


ele.addEventListener("click",function(e){
    option=document.querySelector('input[name="defi"]:checked').value
    var randomNumber ;
    var rep ;
   if(option=="easy"){
        randomNumber = Math.floor(Math.random() * 100) + 1;
        rep=10;
   }
   if(option=="medium"){
        randomNumber = Math.floor(Math.random() * 300) + 1;
        rep=13;
        }
    if(option=="hard"){
        randomNumber = Math.floor(Math.random() * 500) + 1;
        rep=15;
}
    console.log(randomNumber);
   fonctionCal(randomNumber,rep);
    ele.value="replay";

})

