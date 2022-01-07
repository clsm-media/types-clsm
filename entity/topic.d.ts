declare namespace Entity {
  interface ITopic {
    id: string;
    name: string;
    votedTimes: number;
    ConversationId: string;
    conversation: Entity.IConversation;
    UserId?: string;
    user?: Entity.IUser;
    isVoted: boolean;
    upcoming?: boolean;
    completed?: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
  }
}