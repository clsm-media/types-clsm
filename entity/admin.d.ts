declare namespace Entity {
  interface IAdmin {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    fullName: string;
    profilePictureURL?: string;
    RoleId: number;
    role: IRole;
    verified?: Date;
    createdAt: Date;
    updatedAt: Date;
  }
}