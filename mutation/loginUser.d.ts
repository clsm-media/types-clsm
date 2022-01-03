declare namespace Mutation {
  namespace LoginUser {
    interface Response {
      loginUser?: {
        jwtToken: string;
      }
    }

    interface Variables {
      input: {
        email: string;
        password: string;
        accessCode?: string;
      }
    }
  }
}
