function calculateFactorial() {
    var numberInput = parseInt(prompt("Enter a number:"));
    var factorial = 1;
    for (var i = 1; i <= numberInput; i++) {
    factorial *= i;
    }
    alert("Factorial of " + numberInput + " is " + factorial);
   }