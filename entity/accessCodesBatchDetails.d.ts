declare namespace Entity {
  interface IAccessCodesBatchDetails {
    id: string;
    admin: Entity.IAdmin;
    AdminId: string;
    name: string;
    contactEmail: string;
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
    qtyRedeemedAllowed: number;
    __typename: string;
  }
}
