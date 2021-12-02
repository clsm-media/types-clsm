declare namespace Mutation {
  namespace AddFanAsGuestToConversation {
    interface Response {
      addFanAsGuestToConversation?: boolean;
    }

    interface Variables {
      input: {
        conversationId: string;
        userId: string;
      }
    }
  }
}
