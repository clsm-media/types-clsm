declare namespace Mutation {
  namespace LoginOauthAdmin {
    interface Response {
      loginOauthAdmin?: {
        jwtToken: string;
      }
    }

    interface Variables {
      google?: {
        idToken: string;
      },
    }
  }
}
