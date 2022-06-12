const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filepath).toString().split('\n');

function solution() {    
    const rows = [0]
    const cols = [0]

    const n1 = input[0].split(' ')
    rows.push(n1[0]*1)
    cols.push(n1[1]*1)
    
    const count = input[1]*1;
    const arr = input.slice(2,input.length)
    
    for(let i =0; i < count; i++){
        let brr = arr[i].split(' ').map(j => {return j*1})
        if(brr[0] ===0){
            cols.push(brr[1])
        }
        else{
            rows.push(brr[1])
        }
    }
    rows.sort((a,b)=> {return a-b})
    cols.sort((a,b)=> {return a-b})

    
    const rowMaxi = rows[rows.length-1] - rows[rows.length-2]
    const colMaxi = cols[cols.length-1] - cols[cols.length-2]
    console.log(rowMaxi * colMaxi)

}
solution()
