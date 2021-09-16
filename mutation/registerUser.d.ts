declare namespace Mutation {
  namespace registerUser {
    interface Response {
      success: boolean;
    }

    interface Variables {
      input: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
      };
    }
  }
}
