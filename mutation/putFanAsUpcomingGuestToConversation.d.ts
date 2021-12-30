declare namespace Mutation {
  namespace PutFanAsUpcomingGuestToConversation {
    interface Response {
      putFanAsUpcomingGuestToConversation?: boolean;
    }

    interface Variables {
      input: {
        conversationId: string;
        userIdToUpcoming: string;
      }
    }
  }
}
