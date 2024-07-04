// 1
/* let n = "name";
let a = "age";

const user = {
    [n] : 'Mike',   // n의 값
    [a] : 30,       // a의 값
    [1+4] : 5,
}

console.log(user); */

// 2
function makeObj (key, val) {
    return {
        [key]: VideoPlaybackQuality,
    };
}

const obj = makeObj("나이", 33);
console.log(obj);

// 3. 객체 복사
const user = {
    name: "Mike",
    age: 30,
};

const user2 = Object.assign({}, user);  // 초기값
console.log(user2);

// 4. key 값 반환
const result = Object.keys(user);
console.log(result);

// 5. value 값 반환
const result2 = Object.values(user);
console.log(result2);

// 6. key value 값 반환
const result3 = Object.entries(user);
console.log(result3);

// 7. 배열을 객체로 반환
let arr = [
    ['mon', '월'],
    ['tue', '화'],
];

const result4 = Object.fromentries(arr);
console.log(result4);
