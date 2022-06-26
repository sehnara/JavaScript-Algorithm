'use strict';

const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filepath).toString().split("\n")

function solution() {   
  // 1. map, visited
  // 2. queue
  // 3. for 돌면서 
    // 1) visited가 false면 true하고 queue에 들어가
    // 2) count ++

    const [N,M] = input[0].split(' ').map(i => {return i*1})
    const map = []
    const visited = []
    const temp = input.slice(1,input.length+1);
    const dx = [-1,1,0,0]
    const dy = [0,0,-1,1]

    for(let i = 0; i < N; i++){
        const a = []
        const v = []
        for(let j = 0; j < M; j++){
            a.push(temp[i][j]*1)
            v.push(false)
        }   
        map.push(a)
        visited.push(v)
    }
    // 2. queue
    const queue = [[0,0]]
    visited[0][0] = true
    // 3.
    while(queue.length){
        let [x,y] = queue.shift()
         
        for(let i = 0; i < 4 ; i++){            
            let nx = x + dx[i]
            let ny = y + dy[i]
            
            if(nx < 0 || nx >= N || ny < 0 || ny >=M) continue
            if(map[nx][ny] === 0) continue
            if(!visited[nx][ny]){
                visited[nx][ny] = true
                map[nx][ny] = map[x][y] + 1
                queue.push([nx, ny])
            }            
        }
    }
    console.log(map)
    console.log(map[N-1][M-1])
}
solution()
