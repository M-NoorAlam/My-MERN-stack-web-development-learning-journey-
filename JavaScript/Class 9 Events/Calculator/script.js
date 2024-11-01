function add(){
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let add = num1+num2
    document.getElementById("result1").innerHTML =add
}
function sub(){
    let num1 = parseFloat(document.getElementById("num5").value)
    let num2 = parseFloat(document.getElementById("num6").value)
    let sub = num1-num2
    document.getElementById("result3").innerHTML =sub
}
function div(){
    let num1 = parseFloat(document.getElementById("num3").value)
    let num2 = parseFloat(document.getElementById("num4").value)
    let div = num1/num2
    document.getElementById("result2").innerHTML =div
}
function mul(){
    let num1 = parseFloat(document.getElementById("num7").value)
    let num2 = parseFloat(document.getElementById("num8").value)
    let mul = num1*num2
    document.getElementById("result4").innerHTML =mul
}