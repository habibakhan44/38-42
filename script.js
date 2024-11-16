// function power(a, b) {
//     return Math.pow(a, b);
// }
// document.write("4 raised to the power 3 is:", power(4, 3));


// // QUESTION 2
// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }

// const year = parseInt(prompt("Enter a year to check if it's a leap year:"));
// document.write(`Is ${year} a leap year?`, isLeapYear(year));

// // 3
// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }
// function calculateTriangleArea(a, b, c) {
//     const S = calculateSemiPerimeter(a, b, c);
//     return Math.sqrt(S * (S - a) * (S - b) * (S - c));
// }
// const sideA = 5;
// const sideB = 6;
// const sideC = 7;
// document.write("The area of the triangle is:", calculateTriangleArea(sideA, sideB, sideC));


// // 4
// function calculateAverage(marks1, marks2, marks3) {
//     return (marks1 + marks2 + marks3) / 3;
// }
// function calculatePercentage(totalMarks, marks1, marks2, marks3) {
//     const obtainedMarks = marks1 + marks2 + marks3;
//     return (obtainedMarks / totalMarks) * 100;
// }
// function mainFunction(marks1, marks2, marks3, totalMarks = 300) {
//     const average = calculateAverage(marks1, marks2, marks3);
//     const percentage = calculatePercentage(totalMarks, marks1, marks2, marks3);

//     document.write(`Average marks: ${average} <br>` );
//     document.write(`Percentage: ${percentage}%`);
// }
// mainFunction(80, 90, 85);



// // 5
// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1;
// }
// document.write("Index of 'i' in 'Habiba': " + customIndexOf("Habiba", "i") + "<br>");
// document.write("Index of 'e' in 'Helen': " + customIndexOf("Helen", "e") + "<br>");


// // 6
// function removeVowels(sentence) {

//     const vowels = "aeiouAEIOU";
    
//     return sentence.split('').filter(char => !vowels.includes(char)).join('');
// }

// let sentence = "Hello, how are you?";
// let result = removeVowels(sentence);
// document.write(result); 


// // 7
// function countSuccessionVowels(sentence) {
//     const vowels = "aeiouAEIOU";
//     let count = 0;

//     for (let i = 0; i < sentence.length - 1; i++) {
//         if (vowels.includes(sentence[i]) && vowels.includes(sentence[i + 1])) {
//             count++;
//         }
//     }

//     return count;
// }

// let sentence = "Pleases read this application and give me gratuity";
// let result = countSuccessionVowels(sentence);
// document.write(result);

// // 8
// function convertToMeters(km) {
//     return km * 1000; 
// }

// function convertToFeet(km) {
//     return km * 3280.84; 
// }
// function convertToInches(km) {
//     return km * 39370.1; 
// }

// function convertToCentimeters(km) {
//     return km * 100000; 
// }


// let distanceInKm = parseFloat(prompt("Enter the distance between two cities (in km):"));
// document.write(`<p>Distance in meters: ${convertToMeters(distanceInKm)}</p>`);
// document.write(`<p>Distance in feet: ${convertToFeet(distanceInKm)}</p>`);
// document.write(`<p>Distance in inches: ${convertToInches(distanceInKm)}</p>`);
// document.write(`<p>Distance in centimeters: ${convertToCentimeters(distanceInKm)}</p>`);

// 9
function calculateOvertimePay(hoursWorked) {
    const regularHours = 40; 
    const overtimeRate = 12.0; 
    
    if (hoursWorked <= regularHours) {
        return 0; 
    } else {
        const overtimeHours = hoursWorked - regularHours;
        return overtimeHours * overtimeRate;
    }
}
let hours = parseInt(prompt("Enter the number of hours worked:"));
let overtimePay = calculateOvertimePay(hours);
document.write(`Overtime pay: Rs. ${overtimePay}`);



function calculateNotes(amount) {
    const denominations = [100, 50, 10];
    let notes = {};
    
    for (let denom of denominations) {
        notes[denom] = Math.floor(amount / denom);
        amount %= denom;
    }
    
    return notes;
}
let amount = parseInt(prompt("Enter the amount to withdraw (in multiples of 10):"));

if (amount % 10 !== 0) {
    document.write("Invalid amount. Please enter multiples of 10.");
} else {
    let notes = calculateNotes(amount);
    document.write(`<p>100s: ${notes[100]}</p>`);
    document.write(`<p>50s: ${notes[50]}</p>`);
    document.write(`<p>10s: ${notes[10]}</p>`);
}


