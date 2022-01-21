declare namespace Mutation {
  namespace SetMuteForUser {
    interface Response {
      setMuteForUser?: boolean;
    }

    interface Variables {
      input: {
        conversationId: string;
        userId: string;
        muted: boolean;
      }
    }
  }
}
