interface IReportable {
  summary(): string;
}

const oldCivic = {
  name: 'Civic',
  broken: true,
  year: 2000,
  summary(): string {
    return `Hello! this is a ${this.name};`;
  },
};

const printSummary = (item: IReportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
