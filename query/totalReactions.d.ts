declare namespace Query {
  namespace TotalReactions {
    interface Response {
      totalReactions: Entity.ITotalReactions;
    }
  
    interface Variables {
      input: {
        conversationId: string;
      },
    }
  }
}