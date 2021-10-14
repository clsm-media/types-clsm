declare namespace Entity {
  interface IInterest {
    id: string;
    name: string;
    usedTimes: number;
    popularity: number;
    createdAt: Date;
    updatedAt: Date;
  }
}