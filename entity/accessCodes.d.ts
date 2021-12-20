declare namespace Entity {
  interface IAccessCodes {
    id: string;
    batch: Entity.IAccessCodesBatchDetails;
    code: string;
    user?: Entity.IUser;
    createdAt: Date;
    updatedAt: Date;
    __typename: string;
  }
}
