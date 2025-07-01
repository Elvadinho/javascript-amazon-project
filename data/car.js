class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }

  displayInfo() {
    return `${this.#brand}  ${this.#model}, ${this.speed} km/h  trunk: ${
      this.isTrunkOpen
    }`;
  }

  go() {
    if (this.isTrunkOpen === false) {
      this.speed += 5;
      if (this.speed > 200) {
        this.speed = 200;
      }
    }
  }

  brake() {
    this.speed -= 5;
    if (this.speed < 0) {
      this.speed = 0;
    }
  }

  openTrunk() {
    if (this.speed === 0) {
      this.isTrunkOpen = true;
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car {
  acceleration;

  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go() {
    if (this.isTrunkOpen === false) {
      this.speed += this.acceleration;
      if (this.speed > 300) {
        this.speed = 300;
      }
    }
  }

  openTrunk() {}

  closeTrunk() {}
}

export const car1 = new RaceCar({
  brand: "McLaren",
  model: "F1",
  acceleration: 20,
});

car1.go();

console.log(car1.displayInfo());
