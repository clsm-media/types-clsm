declare namespace Mutation {
  namespace AddAdmin {
    interface Response {
      addAdmin?: Entity.IAdmin;
    }

    interface Variables {
      input: {
        firstName: string;
        lastName: string;
        email: string;
        role: Entity.IAdminRoleName;
      }
    }
  }
}
