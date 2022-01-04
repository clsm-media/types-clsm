declare namespace Mutation {
  namespace RegisterUser {
    interface Response {
      registerUser?: boolean;
    }

    interface Variables {
      input: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        accessCode: string;
      };
    }
  }
}
