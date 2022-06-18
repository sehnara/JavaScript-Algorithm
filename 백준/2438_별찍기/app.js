const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filepath).toString();
const count = Number(input)

function main(){
    let star = "";
   for (let i = 1; i < count+1; i++) {
       star += "*";
       console.log(star)
   }
}
main()
