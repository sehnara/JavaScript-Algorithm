# JavaScript-Algorithm

자바스크립트 알고리즘 문제 풀이

## 1. 배열 함수 정리(05.31)

- arr.pop()
- arr.push()

- arr.unshift(0) : 배열 앞부분에 값 삽입 \*
- arr.shift() : 배열 앞부분의 값 삭제 \*

- arr.splice(index, 제거할 요수 개수, 추가될 요소(1개 이상 ','해서 적으면 됨))

```
    var arr = [ 1, 2, 3, 4, 5, 6, 7 ];
    arr.splice( 2, 1, "a", "b");
    console.log( arr ); // [ 1, 2, "a", "b", 4, 5, 6, 7 ]
```
