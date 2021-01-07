var outputElement=0;
var inputElement=document.getElementById("numberInput");

document.addEventListener('DOMContentLoaded', function(){
    inputElement.value=1;
    addButton.addEventListener("click",(e)=>{
        //console.log(outputElement);
        //console.log(inputElement.value);
        outputElement+=parseInt(inputElement.value,10);
        turnRed();
        document.getElementById("outputNumber").innerHTML=outputElement;
    });
    subButton.addEventListener("click",(e)=>{
        //console.log(outputElement);
        //console.log(inputElement.value);
        outputElement-=parseInt(inputElement.value,10);
        turnRed();
        document.getElementById("outputNumber").innerHTML=outputElement;
    })
})

function turnRed(){
    if(outputElement<0){
        document.getElementById("outputNumber").style.color="red";
    }else{
        document.getElementById("outputNumber").style.color="black";
    }
}

