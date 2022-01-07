declare namespace Subscription {
  namespace OnTopicInteraction {
    interface Response {
      onTopicInteraction?: Entity.IConversationEvent;
    }
  
    interface Variables {
      conversationId: string;
    }
  }
}