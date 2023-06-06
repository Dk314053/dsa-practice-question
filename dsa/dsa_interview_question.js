// check for palindrome
// optimised solution 
const isPalindrome= function(x){
  if(x<0) return false;
  // return x === x.toString().split("").reverse().join("");
  // above return to check for alphabet palindrome

  return x === +x.toString().split("").reverse().join("");
  // above return to check for number palindrome
  // console.log(x)
}
// const res=isPalindrome("aba")
const res=isPalindrome(121)

console.log(res)

// check for Fibonacci Number
// Fibonacci series are- 0,1,1,2,3,5,8,13
// means the sum [0]index +[1]index=[2]index is fibonacci series
// formul to rmember- F(n)=F(n-1)+F(n-2),for(n>1)
// 1st method-
var fib=function(n){
  const arr=[0,1]
  for(let i=2;i<=n;i++){
    arr.push(arr[i-1]+arr[i-2])
  }
  console.log(arr)
  // return arr[n]
}
fib(5)
// 2nd method-
var fibonacci=function(num){
  if(num<=1) return num

  return fibonacci(num-1)+fibonacci(num-2)
}
console.log(fibonacci(3))

// check for anagram-
// an anagram is word or phrases where we make different word 
// with  same character of our previous word ,we can not take any 
// another character
// for ex- 
// Input: (s = "anagram"), (t = "nagaram"); ----->>>>>   Output: true;
// Input: (s = "rat"), (t = "car");         ----->>>>>   Output: false;

let s = "anagram"
let t = "nagaram"
// Brut force method
// const isAnagram=function(s,t){
//   s=s.split("").sort().join("")
//   t=t.split("").sort().join("")
 
//   return s===t
// }
// console.log(isAnagram(s,t))

// optimise solution of anagram-
const isAnagram=function(s,t){
  if(s.length!==t.length) return false
  let obj1={}
  let obj2={}
  for(let i=0;i<s.length;i++){
    obj1[s[i]]= (obj1[s[i]]||0)+1;
    obj2[t[i]]= (obj2[t[i]]||0)+1;
  }
  for(const key in obj1){
  if(obj1[key]!==obj2[key]){
    return false
  }else{return true}
  }
}
console.log(isAnagram("cat", "rat"));

// Two sum question-
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1] (Because nums[0] + nums[1] == 9, we return [0, 1])
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]
let num=[3,7,4,9]
let target=12

// const twosum=function(num,target){
//   for(let i=0;i<num.length;i++){
//     for (let j=i+1;j<num.length;j++){
//       if(num[i]+num[j]===target) return [i,j]
//     }
//   }
// }
// console.log(twosum(num,target))

// optimise solution of above question
const twosum=function(num,target){
  var obj={};
for(let i=0;i<num.length;i++){
  var n=num[i];

  if(obj[target-n]>=0){
    return [obj[target-n],i];
  }else{
    obj[n]=i;
  }

}
}
console.log(twosum([3,7,4,9],12))

// // Ques 5 - Best Time to Buy and Sell Stocks
// You are given an array prices where prices[i] is the price of a given stock
// on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock.
// Return the maximum profit, If you cannot achieve any profit, return 0.

// Input: prices = [7, 1, 5, 3, 6, 4];  ----->>>>>  Output: 5;
// Input: prices = [7, 6, 4, 3, 1];     ----->>>>>  Output: 0;

// Brut force method
const profit=function maxprofit(prices){
 let globalprofit=0;
  for(let i=0;i<prices.length-1;i++){
    for(let j=i+1;j<prices.length;j++){
      const currentprofit =prices[j]-prices[i]
      if(currentprofit>globalprofit){
        globalprofit=currentprofit;
      }
    }
  }
  return globalprofit;
}
console.log(profit([7,6,4,3,5]))

//  optimise solution of above question