declare namespace Mutation {
  namespace registerUser {
    interface Response {
      output: boolean;
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
