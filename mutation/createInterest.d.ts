declare namespace Mutation {
  namespace CreateInterest {
    interface Response {
      createInterest?: Entity.IInterest;
    }

    interface Variables {
      input: {
        name: string;
      }
    }
  }
}
