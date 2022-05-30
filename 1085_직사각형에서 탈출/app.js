const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filepath).toString().split(" ");
const x = Number(input[0])
const y = Number(input[1])
const w = Number(input[2])
const h = Number(input[3])

function main(){
    const result = Math.min(x,y,w-x, h-y)
    console.log(result)
}
main()
