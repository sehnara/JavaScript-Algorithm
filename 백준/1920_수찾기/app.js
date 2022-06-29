'use strict';
const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filepath).toString().trim().split("\n")

function solution() {   
const [N, A, M, B] = input.map(v => v.split(" "));
console.log(N,A,M,B)
// const array = new Set(A);

// const result = B.map(v => array.has(v) ? 1 : 0);

// console.log(result.join("\n"));
}
solution()




// const [A, nrr, B, mrr] = input.map(v => v.split(" ").map(Number));
// const N = A[0]
// const M = B[0]
// nrr.sort((a,b)=> {return a-b})
// const result = []

//  for(let i = 0 ; i < M ; i++){
//     let start = 0
//     let end = N
//     let center = 0;
//     let isGood = false
    

//     while(start <= end){
//         center = Math.floor((start + end)/2)       
//         if(mrr[i] === nrr[center]){
//             isGood = true            
//             break
//         }   
//         if(mrr[i] > nrr[center]){
//             start = center + 1
//         }
//         else{
//             end = center -1
//         }   
//     }

//     if(isGood){
//         result.push(1)
//     }
//     else{
//         result.push(0)
//     }    
//  } 
//  console.log(result.join("\n"))