/* call
모든 함수에서 사용 가능, this를 특정값으로 지정할 수 있음 */

const mike = {
    name: "Mike",
};

const Tom = {
    name: "Tom",
};

function showThisName() {
    console.log(this.name);
}

showThisName(); // this는 window를 의미함
showThisName.call(mike);

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
};

update.call(mike, 1999, 'singer');
console.log(mike);

/* apply
매개변수를 배열로 받음 */
/* update.call(mike, [1999, 'singer']); */
const nums = [3, 10, 1, 6, 4];
const minNum = Math.min.apply(null, nums);  // this값 없으므로 아무 값
const maxNum = Math.max.call(null, ...nums);

console.log(minNum);
console.log(maxNum);

/* bind
함수의 this값을 영구히 바꿀 수 있음 */
const user = {
    name: "Mike",
    showName: function () {
        console.log(`hello, ${this.name}`);
    },
};

user.showName();

let fn = user.showName;

fn.call(user);
fn.apply(user);

let boundFn = fn.bind(user);

boundFn();