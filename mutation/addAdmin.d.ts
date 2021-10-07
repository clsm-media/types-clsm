declare namespace Mutation {
  namespace AddAdmin {
    interface Response {
      addAdmin?: Entity.IAdmin;
    }

    interface Variables {
      input: {
        email: string;
      }
    }
  }
}
