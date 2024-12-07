//

// const num = prompt('Enter the number');
// for (let i = 0; i <= num; i++)
// {
//     console.log(i);
    
// }

// function greet(userName) {
//     alert('Hello There '+userName);
// }
// // great('Sadabhau');
// function doSum(num1,num2) {
//     alert(num1 + num2);
// }
// doSum(50,30)
//

// function calculateSum(num1,num2) {
//     console.log('The value of first number is:', num1);
//         console.log('The value of second number is:',num2);
//     return num1 + num2;
// }
// const sum = calculateSum(5, 45);
// console.log(sum);
// function fullName(firstName, lastName){
//     console.log('firstname is:', firstName);
//     console.log('lastname is:',lastName);
//     return firstName + ' ' + lastName;
// }
// const n = fullName('Sadabhau', 'Khot')
// console.log(n);

function calculateSum() {
    const num1 = prompt('Enter your number 1');
    const num2 = prompt('Enter your number 2');
    const sum = (+num1) + (+num2);
    alert('The sum of two numbers are '+sum);
}

function fullName(){
    const fName = prompt('Enter Your Name');
    alert('Welcome ' + fName);
}

function evenOdd() {
    const num = prompt('Enter Your Number');
    if ((+num) % 2 === 0) {
        alert(num + ' is even');
        
    }
    else {
        alert(num+' is odd');
        
    }
}

function strLength() {
    const str = prompt('Enter Your String');
    alert('The length of string is ' + str.length);
}

function table() {
    const num = prompt('Enter Your Number');
    for (let i = 1; i <= 10; i++){
        t = num * i;
        console.log(t);
        
    }
}

function sumNumbers() {
    let sum = 0;
    for (let i = 1; i <= 100; i++){
        sum = sum + i;
        
        
    }
    console.log('Sum of all numbers are ',sum);
}


function largestThree() {
    const num1 = prompt('Enter Your Number 1');   
    const num2 = prompt('Enter Your Number 2');
    const num3 = prompt('Enter Your Number 3');
    if (num1 > num2 && num1 > num3) {
        alert('The Greater number is ' + num1);
    }else if (num2 > num3 && num2 > num1) {
        alert('The Greater number is ' + num2);
    } else {
        alert('The greater number is ' + num3);
    }
}


function randNum() {
    let num = Math.random()*10+1;
    num1 = Math.floor(num);
    console.log('Your Number is '+num1);
    
}