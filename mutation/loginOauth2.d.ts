declare namespace Mutation {
  namespace LoginOauth2 {
    interface Response {
      loginOauth2?: {
        jwtToken: string;
      }
    }

    interface Variables {
      input: {
        google?: {
          idToken: string;
        },
        apple?: {
          idToken: string;
          firstName: string;
          lastName: string;
        }
      };
    }
  }
}
