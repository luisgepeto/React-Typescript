class Vehicle {
  color: string;
  make: string = '2000';
  // methods by default are public
  constructor(color: string) {
    this.color = color;
  }
  drive(): void {
    console.log('driving a vehicle');
  }
  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number) {
    super('yellow');
  }
  drive(): void {
    console.log(`driving a car with ${this.wheels} wheels`);
  }
  startDrivingProcess(): void {
    this.drive();
  }
}

const vehicle = new Vehicle('red');
vehicle.drive();
console.log(vehicle.color);
console.log(vehicle.make);
//vehicle.honk();
const orangeVehicle = new Vehicle('orange');
console.log(orangeVehicle.color);
console.log(orangeVehicle.make);

const car3 = new Car(4);
car3.drive();
car3.color;
car3.wheels;
