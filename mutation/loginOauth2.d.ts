declare namespace Mutation {
  namespace loginOauth2 {
    interface Response {
      jwtToken: string;
    }

    interface Variables {
      input: {
        idToken: string;
        type: string;
      };
    }
  }
}
