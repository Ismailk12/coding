function sumEvenNumbers(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
    sum += arr[i];
    }
    }
    return sum;
   }
   var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Example array of numbers
   var result = sumEvenNumbers(numbers);
   console.log("Sum of even numbers in the array:", result);
   