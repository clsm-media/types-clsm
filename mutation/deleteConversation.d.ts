declare namespace Mutation {
  namespace DeleteConversation {
    interface Response {
      deleteConversation?: Entity.IConversation;
    }

    interface Variables {
      input: {
        id: string;
      }
    }
  }
}
