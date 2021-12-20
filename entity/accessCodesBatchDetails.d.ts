declare namespace Entity {
  interface IAccessCodesBatchDetails {
    id: string;
    user: Entity.IUser;
    name: string;
    batchName: string;
    shortDescription: string;
    qtyCodes: number;
    exported: boolean;
    enabledToSignUp: boolean;
    exportedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
    codes: Entity.IAccessCodes[];
    qtyUsedCodes: number;
    usedCodes: Entity.IAccessCodes[];
    __typename: string;
  }
}
