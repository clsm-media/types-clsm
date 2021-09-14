declare namespace Mutation {
    namespace ResetUserPassword {
      interface Response {
        resetUserPassword?: boolean;
      }
  
      interface Variables {
        input: {
          token: string;
          password: string;
        };
      }
    }
  }
  