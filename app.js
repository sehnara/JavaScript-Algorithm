const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filepath).toString().split('\n')

function solution() {    
  const N = input[0]*1;
  const nums = input[1].split(' ').map(i =>{ return i*1});
  let count = 0;  

  for(let i = 0 ; i < N ; i++){      
    if(nums[i] === 1 || nums[i] === 0){
        console.log("1",nums[i])
        continue
    }
    else if(nums[i] % 2=== 0){
        if(nums[i] === 2){
            count +=1
        }
        console.log("2",nums[i])
        continue
    }
    else {
        for(let j = 3; j< nums[i]; j += 2){
            if(nums[i] % j === 0){
                continue
            }
        }
        console.log('3',count)
        count +=1
    }
  }
  
}
solution()