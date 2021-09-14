declare namespace Mutation {
  namespace loginUser {
    interface Response {
      loginUser?: {
        jwtToken: string;
      }
    }

    interface Variables {
      input: {
        email: string;
        password: string;
      }
    }
  }
}
