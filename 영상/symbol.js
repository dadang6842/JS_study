// 객체 프로퍼티는 문자열로 반환
// symbol : 유일성 보장

// 다른 개발자가 만들어 놓은 객체
const user = {
    name: "Mike",
    age: 30,
};

// 내가 작업
const showName = Symbol("show name");
user[showName] = function() {
    console.log(this.name);
};

user[showName]();   // 다른 사람이 만들어둔 프로퍼티 덮어쓸 일 없음

// 사용자가 보는 메시지
for (let key in user) {
    console.log(`His ${key} is ${user[key]}.`);
}