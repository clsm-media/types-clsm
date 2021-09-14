declare namespace Mutation {
  namespace loginUser {
    interface Response {
      jwtToken: string;
    }

    interface Variables {
      input: {
        email: string;
        password: string;
      }
    }
  }
}
