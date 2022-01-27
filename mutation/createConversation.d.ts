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
        timeZoneId: string;
        promotionDate?: Date;
        promotionTimeZoneId?: string;
        coverImageFile?: File;
        hostsIds: string[];
        producersIds: string[];
        topics: string[];
        interests: string[];
        sponsorsIds: string[];
        associatedBrandIds: string[];
        isPrivate?: boolean;
      }
    }
  }
}
