'use strict';

const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './DFSBFS_음료수얼려먹기.txt';
const input = fs.readFileSync(filepath).toString().split("\n")

function solution() {   
    // 1. map, visited 만들기
   const map = []
   const visited = []
   
   for(let i = 0; i < input.length ; i++){
        const sect = []
        const visit = []
        for(let j = 0 ; j < input[i].length; j++){
            if(input[i][j] === '\r'){
                continue
            }
            sect.push(input[i][j]*1)
            visit.push(false)
        }
        map.push(sect)
        visited.push(visit)
   }

   const N = map.length
   const M = map[0].length

   // 2. dfs
   function dfs(x,y){
    if(x < 0 || x >= N || y < 0 || y >= M ){
        return false
    }
    if(map[x][y] === 1){
        return false
    }

    if(!visited[x][y]){
        visited[x][y] = true
        
        dfs(x+1,y);
        dfs(x-1,y);
        dfs(x, y+1);
        dfs(x, y-1);
        
        return true
    }
    return false
   }

   // 3. calc
   let count = 0;
   for(let i = 0 ; i < N; i++){
    for (let j = 0; j < M; j++){
        if(dfs(i,j)){
            count ++;
        }
    }
   }
   console.log(count)
}
solution()
