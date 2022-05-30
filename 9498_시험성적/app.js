const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filepath).toString();
const score = Number(input);
function main(){
    if (score >= 90){
        console.log('A')
    }
    else if(score >=80 && score <90){
        console.log('B')
    }
    else if(score >=70 && score <80){
        console.log('C')
    }   
    else if(score >= 60 && score < 70){
        console.log('D')  
    } 
    else {
        console.log('F')    
    }    
}
main()
