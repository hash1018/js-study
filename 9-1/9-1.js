class Student {
    constructor(이름, 국어, 영어, 수학, 과학) {
        this.이름 = 이름;
        this.국어 = 국어;
        this.영어 = 영어;
        this.수학 = 수학;
        this.과학 = 과학;
    }

    getSum() {
        return this.국어 + this.영어 + this.수학 + this.과학;
    }

    getAverage() {
        return this.getSum() / 4;
    }

    toString() {
        return `${this.이름}\t${this.getSum()}점\t${this.getAverage()}점\n`;
    }
}

const students = [];
students.push(new Student('구름', 33,44,55,6));
students.push(new Student('34',5,6,7,8));


class Square {
    #length;
    static #counter = 0;
    static get counter() {
        return Square.#counter;
    }

    constructor(length) {
        this.#length = length;
        Square.#counter += 1;
    }

    static perimeterOf(length) {
        return length * 4;
    }

    static areaOf(length) {
        return length * length;
    }

    get length() {
        return this.#length;
    }

    get perimeter() {
        return this.#length * 4;
    }

    get area() {
        return this.#length * this.#length;
    }

    set length (length) {
        if (length <= 0) {
            throw '길이는 0보다 커야 합니다.';
        }
        this.#length = length;
    }
}


class LifeCycle {
    call() {
        this.a();
        this.b();
        this.c();
    }

    a() {

    }

    b() {

    }

    c() {

    }
}

class Child extends LifeCycle {
    a() {
        
    }
}