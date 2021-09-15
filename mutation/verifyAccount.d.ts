declare namespace Mutation {
  namespace VerifyAccount {
    interface Response {
      verifyAccount?: boolean;
    }

    interface Variables {
      input: {
        token: string;
      }
    }
  }
}
