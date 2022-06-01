const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filepath).toString().split("\n");
const N = Number(input[0])

function main(){
   for (let i = 1; i <= N; i++) {
       let score = 0;
       let accu = 0;
       for (let j = 0; j < input[i].length; j++) {
            if(input[i][j] == "O"){
                accu +=1 ;                              
            }   
            else {
                accu = 0;
            }      
            score += accu;       
       }       
       console.log(score)
   }
}
main()
