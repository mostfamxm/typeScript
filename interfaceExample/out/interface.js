class Car {
    moveLift(step) {
        return `the car drives ${step} km to left`;
    }
    moveRight(step) {
        return `the car moves ${step} km to the right`;
    }
}
class Animal {
    moveLift(step) {
        return `the animal runs ${step} to the left`;
    }
    moveRight(step) {
        return `the animal runs ${step} to the right`;
    }
}
let myCar = new Car;
let myAnimal = new Animal;
console.log(myCar.moveLift(6));
console.log(myCar.moveRight(8));
console.log(myAnimal.moveLift(4));
console.log(myAnimal.moveRight(9));
//# sourceMappingURL=interface.js.map