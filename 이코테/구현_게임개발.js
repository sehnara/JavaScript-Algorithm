'use strict';
const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './구현_게임개발.txt';
const input = fs.readFileSync(filepath).toString().split("\n");

function solution(){
    const [N, M]  = input[0].split(" ").map(i => {return i*1});
    let [x, y, dir] = input[1].split(" ").map(i => {return i*1});
    let cnt = 0;
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1,  0, -1];
    let result = 1;
    // 1. map
    const map = [];
    input.slice(2,input.length+1).map(arr => {
        map.push(arr.split(" ").map(i => {return i*1}))
    })
    
    // 2. visited 
    const visited = [];
    for(let i = 0; i < N; i++){
        const arr = []
        for(let j = 0; j < M; j++){
            arr.push(false);
        }
        visited.push(arr)
    }
    visited[x][y] = true
    
    while(true){
        if(cnt === 4){
            x = x -dx[dir]
            y = y -dy[dir]
            if(map[x][y] === 1 || visited[x][y] === true){
                break
            }
        }

        let x1 = x + dx[dir]
        let y1 = y + dy[dir] 
        console.log(`(${x},${y}) ==> (${x1},${y1})`);

        if( x1 < 0 || x1 >= N || y1 >= M || y1 < 0 || map[x1][y1] === 1 || visited[x1][y1] === true){
            cnt +=1;
        } 
        else{
            cnt = 0;
            result +=1;
            visited[x1][y1] = true;
            x = x1;
            y = y1;
        }
        dir = dir + 1 > 3 ? 0 : dir + 1;
    }
    console.log(result)

    
}
solution();