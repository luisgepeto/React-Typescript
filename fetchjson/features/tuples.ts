// we could represent objects as arrays! with tuples!!!!!

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// this could be an object!, however we need to keep order so we add annotation
// this is a tuple
const pepsi: [string, boolean, number] = ['brown', true, 40];
pepsi[0] = 40;

// we could use type alias (easier deconstruction?)
type Drink = [string, boolean, number];
const sprite: Drink = ['brown', true, 40];

const carSpecs: [number, number] = [400, 3354];
// an object is clearer
const carStats = {
  horsepower: 400,
  weight: 3354,
};
