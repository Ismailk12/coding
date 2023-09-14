function findGreatestNumber(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
    return num1;
    } else if (num2 >= num1 && num2 >= num3) {
    return num2;
    } else {
    return num3;
    }
   }
   var number1 = parseFloat(prompt("Enter the first number:"));
   var number2 = parseFloat(prompt("Enter the second number:"));
   var number3 = parseFloat(prompt("Enter the third number:"));
   var greatestNumber = findGreatestNumber(number1, number2, number3);
   console.log("The greatest number is:", greatestNumber);
      