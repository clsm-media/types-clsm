declare namespace Entity {
  interface IAccessCodesRedeemed {
    AccessCodeId: string;
    accessCode: Entity.IAccessCodes;
    UserId: string;
    user: Entity.IUser;
    createdAt: Date;
    updatedAt: Date;
    __typename: string;
  }
}
