//  Q. Given let arr = [1,2,3,4,5], create a new array where every element is multiplied by 3.

// let arr = [1,2,3,4,5]
// let result = arr.map((ele)=> ele*3)
// console.log(result);


// Q From let arr = [4,7,2,9,4,5], get a new array containing only numbers greater than 4.

// let arr = [4,7,2,9,4,5]

// let result = arr.filter((ele)=>{
//     return ele>4
// })
// console.log(result);


// Q Find the index of the first number greater than 7 in let arr = [3,6,8,10].

// let arr=[3,6,8,10]
// let result = arr.findIndex((ele)=>{
//     return ( ele>7)
// })

// console.log(result);



// Q Remove the 3rd element from let arr = [10,20,30,40,50] using a method that modifies the original array.

// let arr = [10,20,30,40,50]
// arr.splice(2,1)
// console.log(arr);

//  Q Check if let arr = ["apple", "banana", "cherry"] includes "banana".

// let arr = ["apple", "banana", "cherry"]
// console.log(arr.includes('banana'))


//  Q Reverse let arr = [1,2,3,4,5] without changing the original array.

// let arr = [1,2,3,4,5]
// console.log(arr.slice().reverse());

// console.log(arr);


// push() / pop() / unshift() / shift()

// Add 6 to the end of let arr = [1,2,3,4,5].
// let arr = [1,2,3,4,5]
// arr.push(6)
// console.log(arr);


// Remove the first element from let arr = [10,20,30,40].
// let arr = [10,20,30,40]
// arr.shift()
// console.log(arr);


// Add 0 at the beginning of let arr = [1,2,3] and remove the last element.
// let arr =[1,2,3]
// arr.unshift(0)
// console.log(arr);

// map()

// Multiply each element of let arr = [2,4,6] by 5.

// let arr = [2,4,6]
// console.log(arr.map(ele => ele*5))

// Convert let arr = ["a","b","c"] to uppercase letters.

// let arr = ["a","b","c"]
// console.log(arr.map(ele=> ele.toUpperCase()));


// Add 10 to each element in let arr = [0,1,2,3].
// let arr = [0,1,2,3]
// console.log(arr.map(ele=> ele+10));


// filter()

// Get numbers greater than 10 from let arr = [5,12,18,7,20].
// let arr = [5,12,18,7,20]
// console.log(arr.filter(ele => ele>10));


// From let arr = ["apple","banana","cherry"], get all elements containing "a".
// let arr = ["apple","banana","cherry"]
// console.log(arr.filter(ele => ele.includes('a')));


// Keep only even numbers in let arr = [1,2,3,4,5,6].
// let arr = [1,2,3,4,5,6]
// console.log(arr.filter(ele=>ele%2===0))


// find() / findIndex()

// Find the first number greater than 15 in let arr = [4,10,20,30].
// let arr = [4,10,20,30]
// console.log(arr.find(num =>num>15));


// Get the index of the first element that is "banana" in let arr = ["apple","banana","cherry"].
let arr = ["apple","banana","cherry"]
console.log(arr.findIndex());

// Find the first number divisible by 3 in let arr = [2,4,9,12].

