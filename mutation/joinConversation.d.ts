declare namespace Mutation {
  namespace JoinConversation {
    interface Response {
      joinConversation?: Entity.IConversation;
    }

    interface Variables {
      input: {
        conversationId: string;
      }
    }
  }
}
