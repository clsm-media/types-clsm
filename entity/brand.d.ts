declare namespace Entity {
  interface IBrand {
    id: string;
    brandName: string;
    contactInfo: string;
    brandURL: string;
    profilePictureURL?: string;
    description: string;
    facebook: string;
    instagram: string;
    twitter: string;
    users?: Entity.IUser[]
    isFollowed: boolean;
    qtyUserFollowers: number;
    qtyFollowers: number;
    qtyFollowings: number;
    interests?: Entity.IInterest[];
    createdAt: Date;
    updatedAt: Date;
    __typename: string;
  }
}