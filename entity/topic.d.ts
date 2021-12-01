declare namespace Entity {
  interface ITopic {
    id: string;
    name: string;
    votedTimes: number;
    ConversationId: string;
    conversation: Entity.IConversation;
    user: Entity.IUser;
    isVoted: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
  }
}