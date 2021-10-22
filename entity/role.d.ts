declare namespace Entity {
    type IRoleName = 'ADMIN' | 'CREATOR' | 'USER';
    type IAdminRoleName = 'ADMIN' | 'CREATOR';

    interface IRole {
      id: string;
      name: string;
    }
  }