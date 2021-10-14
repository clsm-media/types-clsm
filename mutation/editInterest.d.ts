declare namespace Mutation {
  namespace EditInterest {
    interface Response {
      editInterest?: Entity.IInterest;
    }

    interface Variables {
      input: {
        id: string;
        name: string;
      }
    }
  }
}
