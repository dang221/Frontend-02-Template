class Animal {
    constructor(healthValue,happyValue) {
        this.healthValue = healthValue;//生命值
        this.happyValue = happyValue;//怒值
    }
}

class Human extends Animal {
    constructor() {
        super(100)
    }
}

class Dog extends Animal {

    constructor() {
        super(30)
    }
    bite(animal) {
        if (animal instanceof Animal) {
            animal.healthValue --;
            animal.happyValue --;
        }

        this.happyValue ++;//狗咬完就爽了，人就受伤了
    }
}
