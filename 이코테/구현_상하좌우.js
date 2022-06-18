'use strict';

const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './구현_상하좌우.txt';
const input = fs.readFileSync(filepath).toString().split("\n")

function solution() {
   const N = input[0] *1
   const DIR = input[1].split(" ")
   let start = [1,1]
   const dx = [0,0,-1,1]
   const dy = [1,-1,0,0]
   let k = 0
   for(let i = 0;i< DIR.length; i++){
    switch (DIR[i]) {
        case 'R':
            k = 0
        break;
        case 'L':
            k = 1
        break;
        case 'U':
            k = 2
        break;           
        default:
            k = 3
        break;        
    }
    if(start[0] + dx[k] < 1 || start[0] + dx[k] > N ||start[1] + dy[k] < 1 || start[1] + dy[k] > N ){
        continue;
    }
    start = [start[0] + dx[k], start[1] + dy[k]] 
   }
   console.log(start)
}
solution()
