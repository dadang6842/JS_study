/* argument
함수로 넘어 온 모든 인수에 접근
함수 내에서 이용 가능한 지역 변수
length / index
array 형태의 객체
배열의 내장 메서드 없음(forEach, map) */

/* rest parameters */

// 전달된 모든 수를 더해야 함
function add(...numbers) {
    let result = 0;
    numbers.forEach((num) => (result += num));
    console.log(result);
}

add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// user 객체를 만들어 주는 생성자 함수
function User(name, age, ...skills){
    this.name=name;
    this.age=age;
    this.skills=skills;
}

const user1 = new User('Mike', 30, 'html', 'css');
const user2 = new User('Tom', 30, 'html');


// 전개 구문
// arr1을 [4,5,6,1,2,3] 으로
let arr1=[1,2,3];
let arr2=[4,5,6];

arr1 = [...arr2, ...arr1];
console.log(arr1);