const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filepath).toString().split("\n");
const N = input[0]*1;

function solution() {
    for(let i = 1; i <= N ; i++){
        
        let scores = input[i].split(" ")
        let n = scores[0]
        scores.splice(0,1)
        let avg = (scores.reduce((a,b)=> a+=b*1,0) / n)
        let count = 0;

        for(let i = 0; i < n; i++){
            if(scores[i] > avg){
                count ++;
            }
        }
        console.log(`${(count/n*100).toFixed(3)}%`)
    }
}
solution()
