declare namespace Entity {
  type IConversationStatus = 'UPCOMING' | 'LIVE' | 'COMPLETED';

  interface IConversation {
    id: string;
    name: string;
    description: string;
    date: Date;
    promotionDate?: Date;
    coverImageURL?: string;
    status: IConversationStatus;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
  }
}