declare namespace Mutation {
  namespace DeleteInterest {
    interface Response {
      deleteInterest?: Entity.IInterest;
    }

    interface Variables {
      input: {
        id: string;
      }
    }
  }
}
