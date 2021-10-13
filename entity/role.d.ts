declare namespace Entity {
    type IRoleName = 'ADMIN' | 'CREATOR' | 'USER';

    interface IRole {
      id: string;
      name: string;
    }
  }