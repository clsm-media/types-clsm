declare namespace Entity {
  interface IConversation {
    id: string;
    name: string;
    description: string;
    date: Date;
    promotionDate?: Date;
    coverImageURL?: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
  }
}