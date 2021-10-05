declare namespace Mutation {
  namespace CompleteConversation {
    interface Response {
      completeConversation?: Entity.IConversation;
    }

    interface Variables {
      input: {
        id: string;
      }
    }
  }
}
