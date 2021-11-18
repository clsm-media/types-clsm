declare namespace Mutation {
  namespace CreateConversation {
    interface Response {
      createConversation?: Entity.IConversation;
    }

    interface Variables {
      input: {
        name: string;
        description: string;
        date: Date;
        promotionDate?: Date;
        coverImageFile?: File;
        hostsIds: string[];
        topics: string[];
        interests: string[];
        sponsorsIds: string[];
        associatedBrandIds: string[];
      }
    }
  }
}
