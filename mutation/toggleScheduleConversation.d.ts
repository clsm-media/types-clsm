declare namespace Mutation {
  namespace ToggleScheduleConversation {
    interface Response {
      toggleScheduleConversation?: Entity.IConversation;
    }

    interface Variables {
      input: {
        conversationId: string;
      }
    }
  }
}
