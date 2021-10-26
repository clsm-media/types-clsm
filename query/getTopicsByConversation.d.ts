declare namespace Query {
  namespace GetTopicsByConversation {
    interface Response {
      getTopicsByConversation?: Entity.IConversation[];
    }
  
    interface Variables {
      input: {
        conversationId: string;
      },
    }
  }
}