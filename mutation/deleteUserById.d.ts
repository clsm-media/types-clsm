declare namespace Mutation {
  namespace DeleteUserById {
    interface Response {
      success: boolean;
    }

    interface Variables {
      id: string;
    }
  }
}
