declare namespace Mutation {
  namespace RemoveAdmin {
    interface Response {
      removeAdmin?: boolean;
    }

    interface Variables {
      input: {
        id: string;
      }
    }
  }
}
