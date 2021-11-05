declare namespace Mutation {
  namespace ChangeCurrentTopic {
    interface Response {
      changeCurrentTopic?: Entity.IConversation;
    }

    interface Variables {
      input: {
        conversationId: string;
        topicId: string;
      }
    }
  }
}
