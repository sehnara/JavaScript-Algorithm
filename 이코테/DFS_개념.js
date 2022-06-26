// function dfs(graph, v, visited){
//     visited[v] = true;
//     console.log(v)
//     for(let i = 0; i < graph[v].length;  i++){
//         if(!visited[graph[v][i]]){
//             dfs(graph, graph[v][i], visited)
//         }
//     }
// }

function bfs(graph, start, visited){
    const queue = [start]
    visited[start] = true
    while (queue.length > 0){
        v = queue.shift()
        console.log(v)
        for(let i = 0; i < graph[v].length ; i++){
            if(!visited[graph[v][i]]){
                visited[graph[v][i]] = true
                queue.push(graph[v][i])
            }
        }
    }
}

const graph = [
    [],
    [2,3,8],
    [1,7],
    [1,4,5],
    [3,5],
    [3,4],
    [7],
    [2,6,8],
    [1,7]
]

visited = [false, false, false, false, false, false, false, false, false]

bfs(graph, 1, visited);
