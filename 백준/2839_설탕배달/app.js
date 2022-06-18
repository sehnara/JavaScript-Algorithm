const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filepath).toString()
// 3x+5y = N // y가 클수록 좋다
function solution() {
    const N = input *1;
    const K = Math.floor(N / 5);
    
    for(let i = K; i >=0; i--){
        if((N-(5*i)) % 3 === 0){
            console.log(i + (N-(5*i))/3)
            return;
        }
    }
    console.log(-1)
    return;   
}
solution()
