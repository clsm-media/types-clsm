declare namespace Mutation {
  namespace DeleteFanAsUpcomingGuestToConversation {
    interface Response {
      deleteFanAsUpcomingGuestToConversation?: boolean;
    }

    interface Variables {
      input: {
        conversationId: string;
        userIdToRemove: string;
      }
    }
  }
}
