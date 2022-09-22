//Global variables
var prevCalc = 0;
var calc = "";



// adding event listeners to each number button based on click event
window.onload = function (){
    // Event listeners for numbers on calculator
    document.getElementById("btn1").onclick = showNum;
    document.getElementById("btn2").onclick = showNum;
    document.getElementById("btn3").onclick = showNum;
    document.getElementById("btn4").onclick = showNum;
    document.getElementById("btn5").onclick = showNum;
    document.getElementById("btn6").onclick = showNum;
    document.getElementById("btn7").onclick = showNum;
    document.getElementById("btn8").onclick = showNum;
    document.getElementById("btn9").onclick = showNum;
    document.getElementById("btn0").onclick = showNum;
    document.getElementById("btnDecimal").onclick = showNum;


    // event listeners for functions set in Activity 5
    document.getElementById("btnPlus").onclick = add;
    document.getElementById("btnMinus").onclick = subtract;
    document.getElementById("btnDecrement").onclick = decrement;
    document.getElementById("btnIncrement").onclick = increment;
    document.getElementById("btnTimes").onclick = multiply;
    document.getElementById("btnSqrt").onclick = theSqrt;
    // Listeners for functions not implemented in Activity 5
    document.getElementById("btnPow").onclick = power;
    document.getElementById("btnPow2").onclick = powerTwo;
    document.getElementById("btnFloor").onclick = floor;
    document.getElementById("btnRound").onclick = round;
    document.getElementById("btnDivide").onclick = divide;

    // Event listeners for clear and calculate
    document.getElementById("btnReset").onclick = clear;
    document.getElementById("btnCalc").onclick = calculate;


}





//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum() {
    document.frmCalc.txtNumber.value += this.value;
}

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
function decrement() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num--;
            document.frmCalc.txtNumber.value = num;
        }
}

//The following function increases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.
function increment() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        num++;
        document.frmCalc.txtNumber.value = num;
    }
}

//The following function takes the square root of the number.
//isNaN method checks whether the value passed to the method is a number or not.
function theSqrt() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        document.frmCalc.txtNumber.value = Math.sqrt(num);
    }
}

//Function rounds number
function round() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        document.frmCalc.txtNumber.value = Math.round(num);
    }
}
// Function to find the floor
function floor() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        document.frmCalc.txtNumber.value = Math.floor(num);
    }
}

// function raises number to the power of 2
function powerTwo() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        document.frmCalc.txtNumber.value = num ** 2;
    }
}

//The following function is called when "Add" button is clicked. 
//Note that it also changes the values of the global variables.       
function add() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Add";
        }
}

//The following function is called when "Subtract" button is clicked.
//Note that it also changes the values of the global variables.
function subtract() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Subtract";
        }
}

//The following function is called when "Multiply" button is clicked.
//Note that it also changes the values of the global variables.
function multiply() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Multiply";
    }
}

// Function divides previous input by the next number input
function divide() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Divide";
    }
}

// Function raises number from previous calc to next number input
function power() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Power";
    }
}

//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.        
function calculate() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            if (calc === "Add"){
                var total = prevCalc + num;
                document.frmCalc.txtNumber.value = total;
            }
            if (calc === "Subtract"){
                var total = prevCalc - num;
                document.frmCalc.txtNumber.value = total;
            }
            if (calc === "Multiply"){
                var total = prevCalc * num;
                document.frmCalc.txtNumber.value = total;
            }
            if (calc === "Divide"){
                var total = prevCalc / num;
                document.frmCalc.txtNumber.value = total;
            }
            if (calc === "Power"){
                var total = prevCalc ** num;
                document.frmCalc.txtNumber.value = total;
            }
        
}}

// Function clears current operations or numbers
function clear() {
	document.frmCalc.txtNumber.value = "";
	prevCalc = 0;
	calc = "";
}