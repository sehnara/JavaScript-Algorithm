const solution = (N) =>{
    // 0~N, 0~59, 0~59
    // 1. 0~N을 for문 돌리면서, string 값으로 바꾸고, include 해서 cnt 구한다.
    // 2, 0~59, 위와 같은 방법으로 cnt2 구한다
    // cnt * cnt2 * cnt2
    let cnt1 = 0
    let cnt2= 0
    if(N >= 3 && N <13){
        cnt1 = 1
    }
    else if(N >=13 && N < 23){
        cnt1 = 2
    }
    else if(N < 3){
        cnt1 = 0
    }
    else {
        cnt1 = 3
    }
    
    for(let i=0; i <=59; i++){
        let k = i.toString();
        if(k.includes('3')){
            cnt2 ++;
            console.log(`TEST 1 => ${k}`)
        }
    }
    console.log((cnt1 * 60 * 60) + (cnt2*(N+1)*60)^2)
    // 생각해보니 겹치는 경우가 있을 거 같다.
}

function solution2(N){
    let cnt = 0;
    for(let i=0; i <=N; i++){
        for(let j = 0; j <60; j++){
            for(let k = 0; k < 60; k++){
                if((i.toString()+j.toString()+k.toString()).includes('3')){
                    // console.log(`${i.toString()}시 ${j.toString()}분 ${k.toString()}초`);
                    cnt ++;
                }
            }
        }
    }
    console.log(cnt)
}


solution2(5)