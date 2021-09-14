declare namespace Mutation {
  namespace RegisterUser {
    interface Response {
      RegisterUser?: {
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
