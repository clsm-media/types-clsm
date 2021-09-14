declare namespace Mutation {
  namespace loginOauth2 {
    interface Response {
      loginOauth2?: {
        jwtToken: string;
      }
    }

    interface Variables {
      input: {
        idToken: string;
        type: string;
      };
    }
  }
}
