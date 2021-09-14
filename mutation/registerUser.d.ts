declare namespace Mutation {
  namespace RegisterUser {
    interface Response {
      registerUser?: {
        output: boolean;
      }
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
