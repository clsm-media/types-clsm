declare namespace Mutation {
  namespace UpdateTokens {
    interface Response {
      updateTokens?: Boolean;
    }

    interface Variables {
      input: {
        fcmTokenToAdd?: string;
        fcmTokenToRemove: string;
      };
    }
  }
}
