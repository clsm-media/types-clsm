declare namespace Mutation {
  namespace AddTopic {
    interface Response {
      addTopic?: Entity.ITopic;
    }

    interface Variables {
      input: {
        conversationId: string;
        name: string;
      }
    }
  }
}
