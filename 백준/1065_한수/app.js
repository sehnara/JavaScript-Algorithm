const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filepath).toString()

function solution() {    
    const num = input*1;    
    let count = 99;

    if(num < 100){
        console.log(num)
        return
    }
    else if(num <= 1000){
        
        for(let i = 100; i <= num ; i++ ){
            let n1 = Math.floor(i/100)
            let n2 = Math.floor((i%100) / 10)
            let n3 = i%10
            if((n1-n2)==(n2-n3)){
                count ++;
            }
        }
    }
    
    console.log(count)
}
solution()
