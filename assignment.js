//A. Part 1: Coding Questions (7.5 Grade):
/*1-*/ console.log(+"123"+7);

/*2*/let num=0;

/*3*/if(!num||""||null){
    console.log("falsy")
}else{"invalid"};
for(let i=1;i<=10;i++){
    if(i%2===0){
        continue;
    }
    console.log(i);
}

/*4*/let arr=[1,2,3,4,5];
let evenArr=arr.filter(function(num){
    return num%2===0;});
console.log(evenArr);
//====================حل تاني
let evens = arr.filter(num => num % 2 === 0);
console.log(evens); 

/*5*/let arr1=[1,2,3];
let arr2=[4,5,6];
let allArr=[...arr1,...arr2];
console.log(allArr);

/*6*/let dayNum = 2 
let dayName;
switch (dayNum) {
case 1:
    dayName = "Sunday";
    break;
case 2:
    dayName = "Monday";
    break;
case 3:
    dayName = "Tuesday";
    break;
case 4:
    dayName = "Wednesday";
    break;
case 5:
    dayName = "Thursday";
    break;
case 6:
    dayName = "Friday";
    break;
case 7:
    dayName = "Saturday";
    break;
default:
    dayName = "Invalid day";
}
console.log(dayName);

/*7*/let lengths = arr.map(str => {
return str.length;
});
console.log(lengths);

/*8*/function checkDivisible(num) {
if (num % 3 === 0 && num % 5 === 0) {
    return "Divisible by both";
} else {
    return "Not divisible by both";
}
}
console.log(checkDivisible(15));

/*9*/const square = num => num * num;
console.log(square(5));

/*10*/function formatPerson({name, age}) {
return `${name} is ${age} years old`;
}
const person = {name: 'John', age: 15};
console.log(formatPerson(person)); 

/*11*/function sum(...nums) {
return nums.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5)); 

/*12*/function delayedSuccess() {
return new Promise(resolve => {
    setTimeout(() => {
        resolve("Success");
    }, 3000);
});
}
delayedSuccess().then(console.log); 

/*13*/function findLargest(arr) {
return Math.max(...arr);
}
console.log(findLargest([1, 3, 7, 2, 4]));

/*14*/function getKeys(obj) {
return Object.keys(obj);
}
console.log(getKeys({name: "John", age: 30}));

/*15*/function splitWords(str) {
return str.split(" ");
}
console.log(splitWords("The quick brown fox"));







