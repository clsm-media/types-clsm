declare namespace Mutation{
  namespace verifyAccount {
    interface Response {
      success: boolean;
    }

    interface Variables {
      input: {
        email: string;
        password: string;
      };
    }
  }
}
