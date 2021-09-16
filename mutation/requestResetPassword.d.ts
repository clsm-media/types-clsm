declare namespace Mutation {
  namespace requestResetPassword {
    interface Response {
      success: boolean;
    }

    interface Variables {
      input: {
        email: string;
      };
    }
  }
}
