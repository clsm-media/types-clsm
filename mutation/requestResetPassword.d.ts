declare namespace Mutation {
  namespace RequestResetPassword {
    interface Response {
      requestResetPassword?: boolean;
    }

    interface Variables {
      email: string;
    }
  }
}
