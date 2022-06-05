function solution(places) {
    var answer = [];
    for(let i = 0; i < 5; i++){        
        for(let j =0 ; j <5 ; j++){ 
            const arr = [...places[i][j]];
            if(!arr.includes('P')){
                return
            }  
            else{
                let isP = false;
                let count = 0;
                let isX = false
                arr.map(item => {
                    if(isP){
                        if(item === 'P'){
                            if(count >=2 || isX){
                                isX = false
                                count = 0
                            }
                            else{
                                answer.push(0)
                                return
                            }
                        }
                        else{
                            return
                        }
                    }
                    else {
                        if(item === "P"){
                            isP = true
                        }
                        else if(item === "O"){
                            count +=1
                        }
                        else if(item === "X"){
                            isX = true
                        }
                        
                    }
                })
            }
        }
        answer.push(1)
    }
    
    return answer;
}