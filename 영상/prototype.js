const Bmw = function (color) {
    const c = color;
    this.getColor = function () {
        console.log(c); // color 바꿀 수 없음
    };
};

/*
Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function () {
    console.log("drive..");
};
Bmw.prototype.navigation = 1;
Bmw.prototype.stop = function () {
    console.log("STOP!");
}; */ // constructor 보장

Bmw.prototype = {
    constructor: Bmw,   // constructor를 보장하지 않기 때문에 명시
    wheels: 4,
    drive() {
        console.log("drive..");
    },
    navigation: 1,
    stop () {
        console.log("STOP!");
    },
};



const x5 = new Bmw("red");
const z4 = new Bmw("red");

console.log(x5);
/* instanceof
어떤 생성자를 사용해서 만들었는지 */

z4.constructor === Bmw;