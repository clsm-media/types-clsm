declare namespace Mutation {
  namespace LoginOauth2 {
    interface Response {
      loginOauth2?: {
        jwtToken: string;
      }
    }

    interface Variables {
      google?: {
        idToken: string;
        accessCode?: string;
      },
      apple?: {
        idToken: string;
        firstName: string;
        lastName: string;
        accessCode?: string;
      }
    }
  }
}
