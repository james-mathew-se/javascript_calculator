var x = document.getElementsByName('input-A');
var y = document.getElementsByName("input-B");

var oper = document.getElementsByName("oper");
var resH3 = document.getElementsByName("res-hdng");

var calcform = document.getElementsByName("calc-inp-form");

var res = 0;

calcform[0].addEventListener("submit",function(event){
  
    var operslctd = oper[0].value;
    
    console.log("Selected: " + operslctd);
    
    var xval = parseFloat(x[0].value);
    var yval = parseFloat(y[0].value);
    
    switch (operslctd) {
    case "+":
        res = xval + yval;
        break;
    case "-":
        res = xval - yval;
        break;
    case "x":
        res = xval * yval;
        break;
    case "/":
        res = xval / yval;
        break;
    default:
        res = 0;
    }
    
    resH3[0].innerText = "Result: " + res + ".";  
    event.preventDefault();
});




