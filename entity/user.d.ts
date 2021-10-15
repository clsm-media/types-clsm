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
    createdAt: Date;
    updatedAt: Date;
  }
}