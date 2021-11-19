declare namespace Subscription {
  namespace OnUserReaction {
    interface Response {
      onUserReaction?: Entity.IConversationEvent;
    }
  
    interface Variables {
      conversationId: string;
    }
  }
}