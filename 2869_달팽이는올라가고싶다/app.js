const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filepath).toString().split(' ')

function solution() {    
    let V = input[2]*1;
    const A = input[0]*1;
    const B = input[1]*1;
    let count = 0;
    
    if(V<A){
        count =1 
    }
    else {        
        if((V-A) % (A-B) >0){
            count = Math.floor((V-A) / (A-B)) +2
        }
        else {
            count = Math.floor((V-A) / (A-B)) +1
        }
    }
    console.log(count)
}
solution()