import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  color: string = 'red';
  name: string;
  phrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.phrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<h1>${this.name}</h1> - <h2>${this.phrase}</h2>`;
  }
}
