// any Js library needs to have a type definition file to work with Typescript!
import faker from 'faker';
import { Mappable } from './CustomMap';

// Exports should have capital names in files
export class User implements Mappable {
  color: string = 'blue';
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
