declare namespace Mutation {
  namespace requestResetPassword {
    interface Response {
      requestResetPassword?: boolean;
    }

    interface Variables {
      input: {
        email: string;
      };
    }
  }
}
