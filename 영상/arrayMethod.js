// 1. arr.map() : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환

let userList = [
    { name: "Mike", age: 30 },
    { name: "Jane", age: 27 },
    { name: "Tom", age: 10 },
    { name: "Sue", age: 26 },
    { name: "Harry", age: 42 },
    { name: "Steve", age: 60 },
];

let newUserList = userList.map((user, index) => {
    return Object.assign({}, user, {
        id: index + 1,
        isAdult: user.age > 19,
    });
});

console.log(newUserList);
console.log(userList);

// arr.sort() -> lodash 공부

/* arr.reduce()
인수로 함수를 받음
(누적 계산값, 현재값) => { return 계산값 }; */

let result = userList.reduce((prev, cur)=>{
    if(cur.age > 19) {
        prev.push(cur.name);
    }
return prev;
}, []);   // 초기값 빈 배열, 성인일 경우에만 반환

console.log(result);