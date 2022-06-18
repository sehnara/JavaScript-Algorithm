const solution = (N) =>{
    // 0~N, 0~59, 0~59
    // 1. 0~N을 for문 돌리면서, string 값으로 바꾸고, include 해서 cnt 구한다.
    // 2, 0~59, 위와 같은 방법으로 cnt2 구한다
    // cnt * cnt2 * cnt2
    let cnt1= 0
    let cnt2= 0
    for(let i=0; i <=N; i++){
        let k = i.toString();
        if(k.includes('3')){
            cnt1 ++;
            console.log(`TEST 1 => ${k}`)
        }
    }
    for(let i=0; i <=59; i++){
        let k = i.toString();
        if(k.includes('3')){
            cnt2 ++;
            console.log(`TEST 1 => ${k}`)
        }
    }
    console.log((cnt1 * 60 * 60) + (cnt2*(N+1)*60)^2)
}

solution(5)