function vowels (value) {
    let counter = 0;
    let char = '';
    for (let i = 0; i < value.length; i++) {
        char = value[i].toLowerCase();
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            counter++
        }
        
    } 
    return counter;
}

const output=vowels("aBbCcDdEe");
console.log(output);
// -----------------------------------

/* Task-1:
Write a function to convert temperature from Celsius to Fahrenheit. */

// function CalcToFhar(numbers){
//      const cToF=`${numbers} celcius equals to ${(numbers *9/5)+32} fahrenheiit`;
//      return cToF;
// }
// const result = CalcToFhar("20");
// console.log('fahrenhit is -');
// console.log(result);\
// *---------------------------*--------------------------------*
/* Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5 */

/* 
function find(numbers){
    let array =[];
    for (const search of numbers) {
       if(array.includes(search)===false){
        array.push(search);
       }
    }
    return array;
}
const result = find([5,6,11,12,98, 5]);
console.log(result); */
// -----------------------------------------------

/* function find(numbers,nums){
    // let array =[];
    let finder= 0;
    for(let search=0 ; search < numbers.length ; search++){
         if(numbers[search]===nums){
            finder++;
         }
    }
    return finder;
}
const result = find([5,6,11,12,98, 5],25);
console.log(result); */

// function f(array,value){
//     var n = 0;
//     for(i = 0; i < array.length; i++){
//         if(array[i] == value){n++}
//     }
//     return n;
// }
// *-------------------*--------------------------*

/* Task-3:
Write a function to count the number of vowels in a string.
 */

// function isVowel(str){
//     let count = 0;
//     for(let i=0 ; i<str.length; i++){
//         if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
//             count++;
//         }
//     }
//     return count;
// }

// function vowels (string) {
//     var counter = 0;
//     let cntr = "";
//     for (let i=0; i < string.length; i++) {
//         cntr=string[i] .toLowerCase();
//         if (cntr == 'a' || cntr == 'e' || cntr == 'i' || cntr == 'o' || cntr == 'u') {
//             counter++;
//         }
//     }
//     return counter;
// }

// const result = vowels('Ami tmk vAlubAshi ')
// console.log(result);

// *-------------------*--------------------------*

/* Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming */
/* 
function myFunction(str){
    let singleWords=str.split(' ');
    let longword= 0;
    for(let i= 0; i<singleWords.length; i++){
        if(singleWords[i]> longword){
            longword= singleWords[i].length();
        }
    }
    return longword;
} */
// const result = myFunction("I am learning programming to become a programmer");
// console.log( result);

function findLongestWord(str) {
    var strSplit = str.split(" ");
    var longestWord = "";
    for (var i = 0; i < strSplit.length; i++) {
      if (strSplit[i].length > longestWord.length) {
        longestWord = strSplit[i];
      }
    }
    return longestWord;
  }
  const result = findLongestWord(
    "I am learning programming to become a programmer"
  );
  console.log(result);
  
// -----------------------------------
/* Task-5:
Generate a random number between 10 to 20. */

let min=10;
let max=20;

// const result = Math.random()*(max-min)+10;
console.log(result);
// -----------------------------------
/* -----------Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137]; */

/* function lowest ( numbers){
    let min = numbers[0];
    for (const minValue of numbers) {
        if(minValue < min){
            min = minValue;
        }        
    }
    return min;
}
const result = lowest([167, 190, 120, 165, 137]);
console.log(result); */ 

// *---------------------------------------------------------------------------------
/* Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed']; */

/* function friends (friend){
    let smallest = friend[0];
    for (const frnd of friend) {
       if(frnd.length<smallest.length){
        smallest=frnd;
       } 
    }

    return smallest;
}
const friend =friends(['rahim', 'robin','i', 'rafiiiiiiii', 'ron', 'rashed']);
console.log(friend) */
// *------------------------------------------------------------------------*
/* Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

 */

/* function calculateElectronicsBudget(laptopQuantity,tabletQuantity,mobileQuantity){
    const laptopPrice = 35000 ;
    const tabletPrice = 15000 ;
    const mobilePrice = 20000 ;

    const mobileCost= mobilePrice*mobileQuantity;
    const laptopCost= laptopPrice*laptopQuantity;
    const tabletCost= tabletPrice*tabletQuantity;
     
    const totalCost = mobileCost+laptopCost+tabletCost
    return totalCost;
}
const total=calculateElectronicsBudget(1,0,1);
console.log('Right now amr need money is', total , 'tk') */

// *---------------------------------------------------------------------------*
/* You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone. */

/* const phones = [
    { model: "PhoneA", brand: "Iphone", price: 90000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 20000 },
    { model: "PhoneD", brand: "Nokia", price: 30000 },
    { model: "PhoneE", brand: "Iphone", price: 10000 },
    { model: "PhoneF", brand: "HTC", price: 40000 },
];
function findAveragePhonePrice(number){
     let sum = 0;
    for (const numbers of number) {
        sum=sum+numbers.price
        
        
    }
    const avarage = sum / number.length
    return avarage;
}
const result = findAveragePhonePrice(phones);
console.log('the avarege money is an:', result ,'Tk'); */
// *--------------------------------------------------------------------------------*
/* Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month. */

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 5000 },
    { name: "shikot", experience: 9, starting: 31000, increment: 3000 },
    { name: "shohel", experience: 4, starting: 20000, increment: 1000 },
];

  function myFunction(numbers){
    let sum = 0;
   for (const person of numbers) {
    const bonus=person.experience * person.increment
    sum+= bonus+person.starting

   }
  return sum;

  }
// const result = myFunction(employees);
console.log( 'the company give employee monie in this month',result);
// -----------------------------------
/* const phone =[
    { name: 'xiomi', price:18000, color: 'black', powerby:'android'},
    { name: 'oppo', price:25000, color: 'black', powerby:'android'},
    {name: 'Infinix', price:10000, color: 'black', powerby:'android'} ,
    {name: 'Iphone', price:180000, color: 'black', powerby:'Apple' },
]
function phoneprice(phones){
    let price = phone[0];
    for (const phone of phones) {
        if( phone.price > price.price){
            price = phone;
        }
    }
  return price;

}
const result = phoneprice(phone);
console.log( 'The high prices phone is :', result) */

const phone =[
    { name: 'appleWacth', price:30000, color: 'black', powerby:'android', Qouantity:1 },
    { name: 'bike', price:250000, color: 'black', powerby:'android',  Qouantity:1},
    {name: 'macbook', price:200000, color: 'black', powerby:'android',Qouantity:1 } ,
    {name: 'Iphone', price:180000, color: 'black', powerby:'Apple' , Qouantity:1 },
]
function phoneprice(phones){
    let totalPrice = 0;
    for (const phone of phones) {
       const cost = phone.price * phone.Qouantity;
       totalPrice=totalPrice + cost
    }
  return totalPrice;

}
// const result = phoneprice(phone);
console.log( 'The high prices phone is :', result)
// -----------------------------------
const numbers = [15, 50, 20, 1, 80, 90, 7, 30, 74, 51, 450, 85, ]
 let value = numbers[0];
function isSmall(number){
    for (const num of number) {
        if(num < value){
            value=num;
        }
    }
    return value;
}
// const result =isSmall(numbers);
console.log(result);
// -----------------------------------
/* const a=20;
const b=60;
const c=400;

if(a>b && a>c){
    console.log("A is the biggest number");
}
else if( b>a && b>c){
    console.log("B is the biggest number ");
}
else{
    console.log( " C is the ultimate boss");
}

function isLongest(num1, num2, num3){
     if(num1>num2 && num1>num3){
        const nums = num1;
        return nums;
     }
     else if(num2>num1 && num2>num3){
        const nums2= num2;
        return nums2;
     }
     return num3;
}
const result = isLongest(5000, 505, 5048)
console.log( 'The biggest number is', result); */

// -----------------------------------

/* normal 100 price = 100
if 200 naw price =90
if 300+ naw price=85 */

/* function discount (quantity){
    if(quantity <=100){
        const totaCost = quantity*100;
        return totaCost;
    }
    else if(quantity<=200){
        const totaCost = quantity*90;
        return totaCost;
    }
    else{
        const totaCost = quantity*85;
        return totaCost;
    }
}
const result = discount(200);
console.log(result); */

// *MULTI LEVEL DISCOUNT*

function discount (quantity){
    const first100Price=100;
    const second100Price=90;
    const over200Price=80;

    if(quantity <=100){
        const totaCost = quantity*first100Price;
        return totaCost;
    }
    else if(quantity<=200){
        const first100Cost=100*first100Price;
        const over100 = quantity-100;
        const over100Cost = over100*second100Price;
        const totaCost = first100Cost+over100Cost;
        return totaCost;
    }
    else{
        const first100Cost=100*first100Price;
        const over100Cost = 100*second100Price;
        const over200 = quantity-200;
        const over200Cost = over200*over200Price
        const totaCost = first100Cost+over100Cost+over200Cost;
        return totaCost;
    }
}
// const result = discount(210);
console.log(result);
// -----------------------------------

const employe = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
  ];
  
  // Function to calculate the current salary for each employee
  function calculateCurrentSalary(employee) {
    return employee.starting + employee.increment * employee.experience;
  }
  
  // Calculate total salary using a loop
  let totalSalary = 0;
  
  for (let i = 0; i < employe.length; i++) {
    const currentSalary = calculateCurrentSalary(employe[i]);
    totalSalary += currentSalary;
  
    console.log(`${employe[i].name}'s current salary is ${currentSalary}`);
  }
  
  console.log(
    "Total Salary to be provided by the company in a month:",
    totalSalary
  );
  
  
// -----------------------------------

const shirtPrice= 550;
const pantPrice = 700;
const shoePrice = 1200;

function numbers ( shirt, pant, shoe){

const shirtTotalCost=shirt*shirtPrice;
const pantTotalPrice = pant*pantPrice;
const shoeTotalPrice = shoe*shoePrice

const totalCost= shirtTotalCost+pantTotalPrice+shoeTotalPrice;
return totalCost;
}
const res =numbers(2,1,1);
console.log(res);
// -----------------------------------
function calculateMoney(ticketSale) {
    if(ticketSale<0){
        return "Invalid Number"
    }
    const ticketPrice=120;
    wacthMan = 500;
    stap = 8;
    const pay= ( ticketSale * ticketPrice) - ( wacthMan + (stap * 50) ) 
    return pay
    }

    function checkName(name) {
        if(typeof name !== "string"){
            return "invalid";
        }
        name = name.toLowerCase();
        const len = name.length - 1;
        const lastWord = name[len];
        if(lastWord==="a" || lastWord==="y" || lastWord==="i" || lastWord==="e" || lastWord==="o" || lastWord==="u" || lastWord==="w"){
            return "good Name";
        }
        return "Bad Name";
    }

    function deleteInvalids(array) {
        if(!Array.isArray((array))){
            return "Invalid Array"
        }
        const numbers = [];
        for(let i =0; i<array.length; i++){
            if(typeof array[i]==="number" && !isNaN(array[i])){
                numbers.push(array[i]);
            }
        }
        return numbers;
        }


        function password(obj) {
            if(!obj.name || !obj.siteName || !obj.birthYear || obj.birthYear.toString().length !==4 ){
                return 'invalid';
            }
            const userName= obj.name;
            const userSiteName= obj.siteName;
            const userBirthyear= obj.birthYear;
        
            const str =userSiteName.split("");
            str[0] = str[0].toUpperCase();
            const site = str.join("");
            const result = site+ "#"+userName+"@"+userBirthyear;
            return result;
            }

            function monthlySavings(arr , livingCost) {
                if (!Array.isArray(arr) || typeof livingCost !== 'number') {
                    return "Invalid input";
                  }
                let sum = 0;
                for (const income of arr) {
                   if(income>=3000){
                    const tax =income*20/100;
                    const taxs = income-tax;
                    sum += taxs;
                   }else{
                    sum += income;
                   }
                   }
                const saving=sum-livingCost;
                if(saving>=0){
                    return saving;
                }else if(saving<0){
                    return "earn More";
                 }  
                }
// -----------------------------------


