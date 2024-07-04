// 1.
let list = [
    "01. 들어가며",
    "02. 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열",
];

let newList = [];

for(let i=0;i<list.length;i++) {
    newList.push(
        list[i].slice(4));   // 4번 위치부터 출력 : 숫자 제외하고 출력
}

console.log(newList);

// 2. 금칙어 : 콜라
// includes: 문자가 있으면 true, 없으면 false 반환

function hasCola(str) {
    if (str.includes("콜라")){
        console.log("금칙어가 있습니다.")
    } else {
        console.log("통과");
    }
}

hasCola("사이다");
hasCola("콜라");

