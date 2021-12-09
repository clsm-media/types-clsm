declare namespace Entity {
  interface IDataAnalyticsCache {
    topics: ITopicCache[];
    reactions: IReactionCache[];
    status: IConversationStatus;
    conversationDate: Date;
    conversationEndDate?: Date;
    lastUpdateAt: Date;
  }
}
