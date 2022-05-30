const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filepath).toString().split("\n");
const count = Number(input[0])

function main(){
   for (let i = 1; i < count+1; i++) {
       const arr = input[i].split(" ")
        let n1 = Number(arr[0])
        let n2 = Number(arr[1])
        console.log(n1 + n2);
   }
}
main()
