declare namespace Mutation {
  namespace RemoveNextTopic {
    interface Response {
      removeNextTopic?: boolean;
    }

    interface Variables {
      input: {
        conversationId: string;
        topicId: string;
      }
    }
  }
}
