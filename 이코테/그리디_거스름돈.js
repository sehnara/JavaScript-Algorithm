// 1번째 풀이
function solution(N) {
  let left =  N;
  const c_500 = Math.floor(left / 500);
  left = left % 500;
  const c_100 = Math.floor(left / 100);
  left = left % 100;
  const c_50 = Math.floor(left / 50);
  left = left % 50;
  const c_10 = Math.floor(left /10);
  console.log(`solution 1 : ${c_500 + c_100 + c_50 + c_10}`);
}
// 2번째 풀이
function solution2(N){
    console.log(N)
    const coins = [500, 100, 50, 10];
    let left = N;
    let count = 0;

    for(let i = 0; i < coins.length; i++){
        count += Math.floor(left / coins[i]);
        left = left % coins[i]
    }

    console.log(`solution 2 : ${count}`);
}
solution(1260)
solution2(1260)
