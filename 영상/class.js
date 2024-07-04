// 상속: extends
// class에서는 메서드 숨김?
// 메소드 오버라이딩

class Car {
    constructor(color) {
        this.color = color;
        this.wheels = 4; 
    }
    drive() {
        console.log("drive..");
    }
    stop() {
        console.log("STOP!");
    }
}

class Bmw extends Car {
    constructor(color) {    // 똑같은 매개변수 넘겨야 함
        super(color);    // constructor 사용할 때 꼭 super 키워드로 부모 클래스 사용해주기
        this.navigation = 1;
    }
    park() {
        console.log("PARK");
    }
    stop() {
        super.stop();   // 오버라이딩: 부모 클래스의 메소드 사용, 기본적으로는 메소드 덮어씀
        console.log("OFF");
    }
}

const z4 = new Bmw("blue");
console.log(z4);