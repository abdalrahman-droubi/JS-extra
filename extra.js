// Q1: Evaluate each of the following Javascript expressions and show the value

console.log(-9 * 3)
console.log("value is " + 50)
console.log(17 % 5)
console.log(5 % 17)
console.log(5 / 10)
console.log(4 == 4)
console.log(4 != 5)
console.log(7 <= 8)
console.log(Math.ceil(2.1) - Math.floor(3.9))
console.log(Math.ceil(-2.1) - Math.floor(-3.9))


// Q6: If you have a “num” variable,  Your task is to print:

let num = 10
switch (num) {
    case 1:
        console.log("ONE")
        break;
    case 2:
        console.log("TOW")
        break;
    case 3:
        console.log("THREE")
        break;
    case 4:
        console.log("FOUR")
        break;
    case 5:
        console.log("FIVE")
        break;
    case 6:
        console.log("SEX")
        break;
    case 7:
        console.log("SEVEN")
        break;
    case 8:
        console.log("EIGHT")
        break;
    case 9:
        console.log("NINE")
        break;
    default:
        console.log("PLEASE TRY AGAIN")
        break;
}

// Q7: Use a loop to display the numbers 0 through 5, each in a separate alert window.

for (let i = 0; i < 6; i++) {
    alert(i)
}

// Q8: Use a loop to display the numbers 0 through 5 in a single alert window
let numdd = []
for (let i = 0; i < 6; i++) {
    numdd.push(i)
}

alert(numdd)

// or 
let numss = ""
for (let i = 0; i < 6; i++) {
    numss += i
}
alert(numss)

// Q9: Use a loop to display the numbers in the range 0…20 that are multiples of 3. 
for (let i = 0; i < 20; i++) {
    if (i % 3 == 0) {
        console.log(i)
    }
}

// Q10: Prompt the user for a number in the range 0…100.  If the number is out of range, 
// display an error message and prompt again until a valid number is entered.Assume the user enters a number each time
let range0_100 = prompt("Please enter a number between (0-100)")
while (range0_100 < 0 || range0_100 > 100) {
    range0_100 = prompt("Error The number is out of range Please enter a number between (0-100)")
}

// Q12: Prompt for an integer, then display the sum of the integers from 0 through the number entered.  
// For example, if you enter 10, then display 55 which is the sum of   0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

// Q13: Prompt for an integer, then display the average of the integers from 0 through the number entered.  
// For example, if you enter 10, then display 5 which is the average of   (0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)/11.


let sumIntegers = prompt("Please enter a integer number")
let sum = 0
for (let i = 0; i <= sumIntegers; i++) {
    sum += i
}
console.log(sum)
let avg = sum / (parseInt(sumIntegers) + 1)
console.log(avg)



