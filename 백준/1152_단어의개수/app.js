const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filepath).toString().split(' ')

function solution() {    
    let count = 0    
    for (let i =0; i < input.length; i++){
        if(input[i] === ''){            
            continue
        } else if(input[i] === '\n'){
            break
        }
        count++
    }
    console.log(count)
    // console.log(input[0] == "" ? input.length-1 : input.length)
}
solution()