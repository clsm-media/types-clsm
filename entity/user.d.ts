declare namespace Entity {
  interface IUser {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
    updatedAt: Date;
    RoleId: number;
    role: IRole;
  }
}