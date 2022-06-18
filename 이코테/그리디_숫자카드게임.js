// 1번째 풀이
const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './그리디_숫자카드게임.txt';
const input = fs.readFileSync(filepath).toString().split("\n");

function main(){
  const line_1 = input[0].split(" ").map(i => {return(i*1)});
  const cards = input.slice(1,input.length);  
  const minis = []  

  for(let i = 0; i < line_1[0] ; i++){
    let arr = cards[i].split(" ").map(i => {return i*1});    
    minis.push(Math.min(...arr))
  }  

  console.log(Math.max(...minis))
}
main()

