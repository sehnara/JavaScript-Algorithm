const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filepath).toString().split("\n");


function main(){
    const result = []
    for (let i = 1; i < input.length; i++) {
        let score = 0;
        
    }
}
main()
