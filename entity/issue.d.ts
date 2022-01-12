declare namespace Entity {
  interface IIssue {
    id: string;
    issue: string;
    currentStatus: string;
    ConversationId: string;
    conversation: Entity.IConversation;
    UserId?: string;
    user?: Entity.IUser;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
  }
}