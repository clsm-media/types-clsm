declare namespace Mutation {
  namespace NextTopic {
    interface Response {
      nextTopic?: Entity.ITopic;
    }

    interface Variables {
      input: {
        conversationId: string;
        topicId: string;
      }
    }
  }
}
