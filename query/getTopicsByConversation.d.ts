declare namespace Query {
  namespace GetTopicsByConversation {
    interface Response {
      getTopicsByConversation?: Entity.ITopic[];
    }
  
    interface Variables {
      input: {
        conversationId: string;
      },
    }
  }
}