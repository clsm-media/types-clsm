declare namespace Mutation {
    namespace resetUserPassword {
      interface Response {
        success: boolean;
      }
  
      interface Variables {
        input: {
          token: string;
          password: string;
        };
      }
    }
  }
  