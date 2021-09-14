declare namespace Mutation {
    namespace resetUserPassword {
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
  