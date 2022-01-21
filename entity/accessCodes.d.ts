declare namespace Entity {
  interface IAccessCodes {
    id: string;
    batch: Entity.IAccessCodesBatchDetails;
    BatchId: string;
    code: string;
    qtyRedeemed: number;
    fulfilled: boolean;
    createdAt: Date;
    updatedAt: Date;
    __typename: string;
  }
}
