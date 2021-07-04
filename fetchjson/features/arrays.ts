const carMakers = ['ford', 'toyota'];

const stringEmptyArray: string[] = [];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla']];

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible types
carMakers.push(100);

// help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible arrays
const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];
importantDates.push(new Date());
importantDates.push(10); // error
importantDates.push('hi');
