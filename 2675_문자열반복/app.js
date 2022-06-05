const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filepath).toString().split('\n')

function solution() {
    N = input[0] * 1
    
    for(let i = 1; i <= N; i++){
        let arr = input[i].split(' ');        
        let count = arr[0]*1;
        let str = arr[1]
        
        let result = []

        for(let j = 0; j < str.length; j++){
            result.push(str[j].repeat(count))            
        }
        console.log(result.join(''))
    }
}
solution()