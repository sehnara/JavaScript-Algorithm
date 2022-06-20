 function solution(N){
    const a1 = N.charCodeAt(0)-96
    const a2 = N[1]*1
    let cnt =0
    const dir = [[2,1], [2,-1], [1,2], [1, -2], [-1, 2], [-1,-2], [-2,1], [-2,-1]]
    
    for(let i = 0; i < dir.length; i++){
        if(a1+dir[i][0] < 1 || a1+dir[i][0] > 9 || a2+dir[i][1] < 1 || a2+dir[i][1] > 9) {
            continue;
        }
        cnt ++
    }
    console.log(cnt)
 }

 solution('a1')

//  'happy'.charCodeAt(2)
//  String.fromCharCode(112)