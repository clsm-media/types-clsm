declare namespace Mutation {
    namespace resetUserPassword {
      interface Response {}
  
      interface Variables {
        input: {
          token: string;
          password: string;
        };
      }
    }
  }
  