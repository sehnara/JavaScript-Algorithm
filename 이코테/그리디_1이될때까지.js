function main(arr){
    let N = arr[0];
    const a = arr[1];
    let cnt = 0;

    while(N >1){
        while(N%a){          
            if(N<=1) break
            N-=1
            cnt +=1       
            // console.log("-",N)     
        }
        if(N<=1) break
        N = N / a;
        cnt+=1
        // console.log("%",N)
    }

    console.log(cnt)
}
main([25, 3])