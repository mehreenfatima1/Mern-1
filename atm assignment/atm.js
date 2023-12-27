var a= document.getElementById("btn1")
a.addEventListener("click",showchange)
function showchange(){
var b=document.getElementById("withdrawamount").value
var c=Math.floor(b/5000)
var d=b%5000
var e =Math.floor(d/1000)
var f=d%1000
var g=Math.floor(f/500)
var h=f%500
var i=Math.floor(h/100)
if(b>5000){
    alert(`You have withdrawn 5000*${c}+ 1000* ${e} + 500* ${g} + 100*${i}` )
}
else if(b>1000){
    alert(`You have withdrawn 1000* ${e} + 500* ${g} + 100*${i}` )
}
else if(b>500){
alert(`You have withdrawn 500* ${g} + 100*${i}`)
}
else if(b>100){
    alert(`You have withdrawn 100*${i}`)
}
else

    {alert("please withdraw more than 100 pkr")}

}

