declare namespace Mutation {
  namespace RemoveGuestFromConversation {
    interface Response {
      removeGuestFromConversation?: boolean;
    }

    interface Variables {
      input: {
        conversationId: string;
        userId: string;
      }
    }
  }
}
