function solution(lottos, win_nums) {
    
    // 1. lottos에서 보이지 않는 수(0)의 개수 
    const zCount = lottos.filter(i => i === 0).length;
    // 2. 0을 제외한 배열을 뽑아서 win_nums와 비교하여 당첨된 횟수 구한다
    const outZero = lottos.filter(i => i !== 0); // lottos에서 0을 제외한 배열
    const wCount = win_nums.filter(num =>outZero.includes(num)).length

    const a = (wCount + zCount) < 2 ? 6 : (7 - (wCount + zCount));
    const b = wCount < 2 ? 6 : 7 - wCount;
    
    
    return [a,b];
}