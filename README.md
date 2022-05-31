# JavaScript-Algorithm

자바스크립트 알고리즘 문제 풀이

## 1. 배열 함수 정리(05.31)

- arr.pop()
- arr.push()

- arr.unshift(0) : 배열 앞부분에 값 삽입 \*
- arr.shift() : 배열 앞부분의 값 삭제 \*

- arr.splice(index, 제거할 요수 개수, 추가될 요소(1개 이상 ','해서 적으면 됨))\*

```
    var arr = [ 1, 2, 3, 4, 5, 6, 7 ];
    arr.splice( 2, 1, "a", "b");
    console.log( arr ); // [ 1, 2, "a", "b", 4, 5, 6, 7 ]
```

- arr.slice(startIndex, endIndex) : startIndex의 값부터 endIndex 전 새로운 배열로 반환 \*
- **arr1.concat(arr1)** : arr2 + arr1로 사본 반환 \*\*\*
- **arr.every**(function) vs arr.some(function) : arr 배열의 각 원소를 function에 넣었을 때, every는 모든 결과과 true여야 true 반환, some은 하나만 true면 ture 반환 \*\*\*

- map, filter, find : 익숙
- arr.reverse()
- **arr.sort()** : 모든 원소를 알파벳순으로 정렬 \*\*\*

```
const arr = [13,12,11,10,5,3,2,1];
arr.sort(); // [1,10,11,12,13,2,3,5];

=> solution
arr.sort((a,b) =>{return a-b;}) // [1,2,3,5,10,11,12,13]
```

- **arr.join(' ')** : 배열의 원소들을 문자열로 묶어줌 \*\*\
