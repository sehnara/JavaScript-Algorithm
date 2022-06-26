'use strict';
const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filepath).toString().split("\n")

function solution() {   
    const N = input[0]*1
    // const nodes = input.slice(1,input.length+1);
    const nodes = input.slice(1);
    // const map = new Array(N+1).fill(new Array())
    const map = Array.from({ length: N + 1 }, () => new Array());
    for(let i =0 ; i < nodes.length ; i++){
        let [a,b] = nodes[i].split(" ").map(i => {return i*1})        
        map[a].push(b)
        map[b].push(a)        
    }
    const visited = Array.from({ length: N + 1 }, () => false);

    const queue = [1]    
    const result = Array.from({ length: N + 1 }, () => 0);
   

    while(queue.length){
        let target = queue.shift();
        visited[target] = true

        for(let i = 0; i < map[target].length; i++){
            if(!visited[map[target][i]]){
                result[map[target][i]] = target
                queue.push(map[target][i])
            }
        }
    }

    // const temp = result.slice(2,result.length+1)
    const temp = result.slice(2)
    temp.forEach(i => {console.log(i)})
}
solution()
