declare namespace Entity {
  interface ITopic {
    id: string;
    name: string;
    votedTimes: number;
    ConversationId: string;
    conversation: Entity.IConversation;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
  }
}