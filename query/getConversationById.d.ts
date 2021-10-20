declare namespace Query {
  namespace GetConversationById {
    interface Response {
      getConversationById: Entity.IConversation;
    }
  
    interface Variables {
      id: string;
    }
  }
}