declare namespace Mutation {
  namespace UpdateConversation {
    interface Response {
      updateConversation?: Entity.IConversation;
    }

    interface Variables {
      input: {
        id: string;
        name: string;
        description: string;
        date: Date;
        promotionDate?: Date;
        coverImageFile?: File;
      }
    }
  }
}
