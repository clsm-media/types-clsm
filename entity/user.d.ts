declare namespace Entity {
  interface IUser {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    fullName: string;
    bio: string;
    profilePictureURL?: string;
    RoleId: number;
    role: IRole;
    interests: Entity.IInterest[];
    followersAmount: number;
    followingsAmount: number;
    qtyFollowers: number;
    qtyFollowings: number;
    isFollowed: boolean;
    createdAt: Date;
    updatedAt: Date;
    __typename: string;
  }
}