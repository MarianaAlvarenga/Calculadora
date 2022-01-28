function mainFunction(){
    //Variables 
    var one             = document.getElementById("one");
    var two             = document.getElementById("two");
    var three           = document.getElementById("three");
    var four            = document.getElementById("four");
    var five            = document.getElementById("five");
    var six             = document.getElementById("six");
    var seven           = document.getElementById("seven");
    var eight           = document.getElementById("eight");
    var nine            = document.getElementById("nine");
    var zero            = document.getElementById("zero");
    var plus            = document.getElementById("plus");
    var minus           = document.getElementById("minus");
    var multiplication  = document.getElementById("multiplication");
    var division        = document.getElementById("division");
    var equal           = document.getElementById("equal");
    var display         = document.getElementById("display");
    var display2        = document.getElementById("display2");
    var AllClean        = document.getElementById("AllClean");
    var Comma           = document.getElementById("Comma");
    var num1            = 0;
    var num2            = 0;
    var operation       = "";
    var resultado       = "";
    var ans             = "";
    var impossible      = "You can't divide by zero, champion ;)";
    var del          = document.getElementById("del");
    var answer          = document.getElementById("answer");
    var numeros = ['casa', 'perro'];

    //Events

    one.onclick = function(){
        display.textContent = display.textContent + 1;
        if(operation == ""){
            num1 = display.textContent;
        } else{
            display2.textContent = display2.textContent + 1;
            num2 = display2.textContent;
        }
        
    }
    two.onclick = function() {
        display.textContent = display.textContent + 2;
        if(operation == ""){
            num1 = display.textContent;
        } else{
            display2.textContent = display2.textContent + 2;
            num2 = display2.textContent;
        }
    }
    three.onclick = function() {
        display.textContent = display.textContent + 3;
        if(operation == ""){
            num1 = display.textContent;
        } else{
            display2.textContent = display2.textContent + 3;
            num2 = display2.textContent;
        }
    }
    four.onclick = function() {
        display.textContent = display.textContent + 4;
        if(operation == ""){
            num1 = display.textContent;
        } else{
            display2.textContent = display2.textContent + 4;
            num2 = display2.textContent;
        } 
    }
    five.onclick = function() {
        display.textContent = display.textContent + 5;
        if(operation == ""){
            num1 = display.textContent;
        } else{
            display2.textContent = display2.textContent + 5;
            num2 = display2.textContent;
        }
    }
    six.onclick = function() {
        display.textContent = display.textContent + 6;
        if(operation == ""){
            num1 = display.textContent;
        } else{
            display2.textContent = display2.textContent + 6;
            num2 = display2.textContent;
        }
    }
    seven.onclick = function() {
        display.textContent = display.textContent + 7;
        if(operation == ""){
            num1 = display.textContent;
        } else{
            display2.textContent = display2.textContent + 7;
            num2 = display2.textContent;
        } 
    }
    eight.onclick = function() {
        display.textContent = display.textContent + 8;
        if(operation == ""){
            num1 = display.textContent;
        } else{
            display2.textContent = display2.textContent + 8;
            num2 = display2.textContent;
        } 
    }
    nine.onclick = function() {
        display.textContent = display.textContent + 9;
        if(operation == ""){
            num1 = display.textContent;
        } else{
            display2.textContent = display2.textContent + 9;
            num2 = display2.textContent;
        }
    }
    zero.onclick = function() {
        display.textContent = display.textContent + 0;
        if(operation == ""){
            num1 = display.textContent;
        } else{
            display2.textContent = display2.textContent + 0;
            num2 = display2.textContent;
        }
    }
    plus.onclick = function() {
        display.textContent = display.textContent + "+";
        operation = "+";
    }
    minus.onclick = function() {
        display.textContent = display.textContent + "-";
        operation = "-"; 
    }
    multiplication.onclick = function() {
        display.textContent = display.textContent + "x";
        operation = "x"; 
    }
    division.onclick = function() {
        display.textContent = display.textContent + "/";
        operation = "/";
    }
    Comma.onclick = function() {
        display.textContent = display.textContent + ".";
        
    }
    love.onclick = function() {
        display.textContent = "Te amo Gasti ♥";
        
    }
    equal.onclick = function() {
        switch (operation){
            case "+":
                resultado = parseInt(num1) + parseInt(num2);
                break;
            case "-":
                resultado = parseInt(num1) - parseInt(num2);
                break;
            case "x":
                resultado = parseInt(num1) * parseInt(num2);
                break;
            case "/":
                resultado = parseInt(num1) / parseInt(num2);
                if (num2 == 0) {
                    resultado = impossible;
                }
                break;
        }
        display.textContent = resultado;
        ans = resultado;
        resultado = "";
        operation = "";
        num1 = 0;
        num2 = 0;  
    }
    AllClean.onclick = function() {
        display.textContent = "";
        display2.textContent = "";
        num1 = 0;
        num2 = 0;
    }

    answer.onclick = function() {
        display.textContent = ans;
        resultado = "";
    }
}