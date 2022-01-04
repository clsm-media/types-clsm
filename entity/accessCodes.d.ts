declare namespace Entity {
  interface IAccessCodes {
    id: string;
    batch: Entity.IAccessCodesBatchDetails;
    BatchId: string;
    code: string;
    user?: Entity.IUser;
    UserId?: string;
    createdAt: Date;
    updatedAt: Date;
    __typename: string;
  }
}
