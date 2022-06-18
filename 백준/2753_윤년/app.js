const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filepath).toString();
const year = Number(input);

function main(){
    if ((year%4 === 0 && year%100 !== 0) || year%400 === 0){
        console.log(1)
    }
    else {
        console.log(0)
    }
}
main()
