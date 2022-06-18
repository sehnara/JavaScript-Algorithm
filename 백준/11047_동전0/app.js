'use strict';

const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filepath).toString().split("\n")

function solution() {
    let N = input[0].split(" ")[0]*1;
    let K =input[0].split(" ")[1]*1;
    let cnt = 0;
    const COINS = input.slice(1,N+1).map(i => {return i*1}).reverse(); // slice(start index, 구하려는 원소 개수 +1)
    // console.log(`TEST : ${COINS}`)

    for(let i = 0; i < N; i++){
        if(K === 0){
            break
        }
        if(Math.floor(K/COINS[i])>0){             
        
            cnt += Math.floor(K/COINS[i])
            K = K%COINS[i]
        }
        
    }
    console.log(cnt)
}
solution()
