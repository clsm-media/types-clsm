declare namespace Mutation {
  namespace ChangeUserPassword {
    interface Response {
      changeUserPassword?: boolean;
    }

    interface Variables {
      input: {
        newPassword: string;
      }
    }
  }
}
