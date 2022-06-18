'use strict';

const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filepath).toString().split("\n")

function solution() {
    const N = input[0]*1
    const TIMES = input.slice(1,N+1).map(i=>{
       let a = i.split(" ")[0]*1
       let b = i.split(" ")[1]*1
       return [a,b]; 
    })
    TIMES.sort((a,b) => {
        return a[0] - b[0]
    })
    
    console.log(TIMES)
}
solution()
